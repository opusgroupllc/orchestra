require_relative '../serializers/user_serializer.rb'

Orchestra::App.controllers :user do

  before :except => [:session, :preflight_me, :preflight_users] do
    token ||= request.env['HTTP_AUTHORIZATION']
    if token.nil?
      error 401, { :error => "Unauthorized." }.to_json
    else
      token = token.split(' ').last unless token.nil?
      begin
        verify(token)
      rescue JWT::ExpiredSignature
        error 401, { :error => "Expired token." }.to_json
      end
    end
  end

  options :preflight_users, :map => '/api/v1/users' do
    200
  end

  get :index, :map => '/api/v1/users' do
    ActiveModel::ArraySerializer.new(User.all, each_serializer: UserSerializer).to_json
  end

  options :preflight_me, :map => '/api/v1/users/me' do
    200
  end

  get :me, :map => '/api/v1/users/me' do
    UserSerializer.new(User.find(1), root: false).to_json
  end

  get :show, :map => '/api/v1/users/:id' do
    UserSerializer.new(User.find(params[:id]), root: false).to_json
  end

  get :statuses, :map => '/api/v1/users/:id/statuses' do
    render plain: 'OK'
  end

  post :session, :map => '/api/v1/users/:username/sessions' do
    user = User.find_by_email(params[:username])

    if user and user.password == params[:password]
      { token: sign_jwt(user.id) }.to_json
     else
      error 400, { :error => "Invalid credentials." }.to_json
    end
  end
end