# super-simple Rack app for static sites on Heroku

require 'rubygems'
require 'bundler'
Bundler.require(:default)


#responds to #call method, returns an Array of 
# [status code, {http headers}, [array_of_strings_in_body]]
map '/' do
  use Rack::Static, urls: ['/css', '/images', '/js'], root: Dir.pwd

  run lambda { |env|
    headers = {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    }
    body = File.open("#{Dir.pwd}/index.html", File::RDONLY).read

    [200, headers, [body]]

  }
end