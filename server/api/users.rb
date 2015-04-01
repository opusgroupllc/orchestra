module Orchestra
  module Routes
    module Users
      def self.registered(app)      
        app.get '/api/v1/users' do
          { hello: 'world' }.to_json
        end

        app.post '/api/v1/users/:id/sessions' do
          puts "#{params[:id]} #{params[:password]}"
        end
      end
    end
  end
end