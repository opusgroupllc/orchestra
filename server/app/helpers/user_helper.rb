# Helper methods defined here can be accessed in any controller or view in the application
require 'jwt'

module Orchestra
  class App
    module UserHelper
      def current_user=(user)
        @current_user = user
      end

      def current_user
        @current_user ||= User.find_by_id(session[:current_user])
      end

      def sign_in(user)
        session[:current_user] = user.id
        self.current_user = user
      end

      def sign_jwt(id)
        JWT.encode({ _id: id, exp: (Time.now + 15.seconds).to_i }, 'hai');
      end

      def sign_out
        session.delete(:current_user)
      end

      def signed_in?
        !current_user.nil?
      end
    end

    helpers UserHelper
  end
end
