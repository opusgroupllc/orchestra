Orchestra::App.controllers :user do

  get :index, :map => '/api/v1/users' do
    { hello: 'world' }.to_json
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