require 'open-uri'
require 'pry-byebug'
url = "https://api.github.com/users/Jon-Cactus"
json = URI.parse(url).read
ruby_object = JSON.parse(json)

binding.pry
puts
