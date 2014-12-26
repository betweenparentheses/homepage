#configures the tumblr file


Tumblr.configure do |config|
  config.consumer_key = ENV['TUMBLR_CONSUMER_KEY']
  config.consumer_secret = ENV['TUMBLR_SECRET']
end

client = Tumblr::Client.new

@posts = client.posts("geminstallmichael.tumblr.com", :type => "text", :limit => 5)