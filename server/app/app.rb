require 'jwt'

module Orchestra
  class App < Padrino::Application
    use ConnectionPoolManagement
    register Padrino::Mailer
    register Padrino::Helpers

    register Sinatra::CrossOrigin

    set :cross_origin, true
    set :allow_methods, [:post, :get, :options, :delete]

    enable :sessions

    def current_user
      @user
    end

    # all controllers must be able to verify auth tokens
    def verify_token
      token ||= request.env['HTTP_AUTHORIZATION']
      if token.nil?
        error 401, { :error => 'Unauthorized.' }.to_json
      else
        token = token.split(' ').last unless token.nil?
        begin
          @user = verify(token)
        rescue JWT::ExpiredSignature
          error 401, { :error => 'Expired token.' }.to_json
        end
      end
    end

    def verify(token)
      payload = JWT.decode(token, 'hai')
      User.find(payload.first['_id'])
    end
  end
end
