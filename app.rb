require 'webrick'

server = WEBrick::HTTPServer.new :Port => 3000
server.mount '/', WEBrick::HTTPServlet::FileHandler, './client'

trap('INT') { server.stop }

server.start