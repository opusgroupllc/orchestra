require_relative '../serializers/user_serializer.rb'

Orchestra::App.controllers :user do
  get :index, :map => '/api/v1/users' do
    ActiveModel::ArraySerializer.new(User.all, each_serializer: UserSerializer).to_json
  end

  get :show, :map => '/api/v1/users/:id' do
    UserSerializer.new(User.find(params[:id]), root: false).to_json
  end

  get :show, :map => '/api/v1/users/:id/statuses' do
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