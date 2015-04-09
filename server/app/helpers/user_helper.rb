# Helper methods defined here can be accessed in any controller or view in the application
require 'jwt'

module Orchestra
  class App
    module UserHelper
      def sign_jwt(id)
        JWT.encode({ _id: id, exp: (Time.now + 7.days).to_i }, 'hai')
      end
    end

    helpers UserHelper
  end
end
