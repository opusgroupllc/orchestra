require 'sinatra'
require 'json'

require_relative 'api/users'

register Orchestra::Routes::Users

after do
  headers \
    'Access-Control-Allow-Origin' => '*'
end