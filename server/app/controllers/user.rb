require_relative '../serializers/user_serializer.rb'

Orchestra::App.controllers :user do

  before :except => [:session, :me_preflight, :index_preflight] do
    verify_token
  end

  options :index_preflight, :map => '/api/v1/users' do
    200
  end

  get :index, :map => '/api/v1/users' do
    ActiveModel::ArraySerializer.new(User.all, each_serializer: UserSerializer).to_json
  end

  options :me_preflight, :map => '/api/v1/users/me' do
    200
  end

  get :me, :map => '/api/v1/users/me' do
    UserSerializer.new(current_user, root: false).to_json
  end

  get :show, :map => '/api/v1/users/:id' do
    UserSerializer.new(User.find(params[:id]), root: false).to_json
  end

  get :statuses, :map => '/api/v1/users/:id/statuses' do
    render plain: 'OK'
  end

  post :session, :map => '/api/v1/users/sessions' do
    user = User.find_by_email(params[:email])

    if user and user.password == params[:password]
      { token: sign_jwt(user.id) }.to_json
     else
      error 400, { :error => "Invalid credentials." }.to_json
    end
  end
end
