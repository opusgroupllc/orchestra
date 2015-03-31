module Orchestra
  module Routes
    module Users
      def self.registered(app)      
        app.get '/api/v1/users' do
          { hello: 'world' }.to_json
        end
      end
    end
  end
end