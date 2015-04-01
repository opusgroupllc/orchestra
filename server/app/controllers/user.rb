Orchestra::App.controllers :user do

  # get :index, :map => '/foo/bar' do
  #   session[:foo] = 'bar'
  #   render 'index'
  # end

  # get :sample, :map => '/sample/url', :provides => [:any, :js] do
  #   case content_type
  #     when :js then ...
  #     else ...
  # end

  # get :foo, :with => :id do
  #   'Maps to url '/foo/#{params[:id]}''
  # end

  # get '/example' do
  #   'Hello world!'
  # end
  
  get :index, :map => '/api/v1/users' do
    { hello: 'world' }.to_json
  end

  get :derp, :map => '/api/v1/users/:username/sessions' do
    puts "#{params}"
    { hello: 'world' }.to_json
  end

  post :session, :map => '/api/v1/users/:username/sessions' do
    user = User.find_by_email(params[:username])

    if user and user.password == params[:password]
      user.to_json
     else
      error 400, { :error => "Invalid credentials." }.to_json
    end
  end

end
