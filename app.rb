require 'webrick'
require 'uri'

class NonCachingFileHandler < WEBrick::HTTPServlet::FileHandler
  def prevent_caching(res)
    res['ETag']          = nil
    res['Last-Modified'] = Time.now + 100**4
    res['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0'
    res['Pragma']        = 'no-cache'
    res['Expires']       = Time.now - 100**4
  end

  def do_GET(req, res)
    begin
      super
    rescue WEBrick::HTTPStatus::NotFound
      uri = URI(res.request_uri)
      res.set_redirect WEBrick::HTTPStatus::TemporaryRedirect, "/##{uri.path}"
    end
    prevent_caching(res)
  end
end

server = WEBrick::HTTPServer.new :Port => 3000
server.mount '/', NonCachingFileHandler, './client'

trap('INT') { server.stop }

server.start