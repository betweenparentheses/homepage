# super-simple Rack app for static sites on Heroku

require 'rubygems'
require 'bundler'
Bundler.require(:default)

# prepare for Tumblr client use
client = Tumblr::Client.new(:consumer_key => ENV['tumblr_consumer_key'])
posts = client.posts("geminstallmichael.tumblr.com", :type => "text", :limit => 5)

first_title = posts['posts'].first['title']
first_body = posts['posts'].first['body']


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
    body.gsub!("TITLE_PLACEHOLDER", first_title)
    body.gsub!("BODY_PLACEHOLDER", first_body)
    [200, headers, [body]]

  }
end