require 'sinatra'
require 'json'

get '/' do
  { hello: 'world' }.to_json
end