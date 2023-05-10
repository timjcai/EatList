# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

def create_lists
  list_titles = ['Best Fried Chicken Melbourne', 'Glen Waverley Top 20', 'Box Hill Top 20', 'Melbourne CBDs Finest']

  list_titles.each do |name|
    title = "#{name}"
    description = Faker::Lorem.paragraph
    new_list = List.new(title: title, description: description)
    p new_list.save
  end
end

def create_places
  places_in_melbourne = [
    {title: "Serai",
    menu: "https://seraikitchen.com.au/menu/",
    location: "Racing Club Ln, Melbourne VIC 3000",
    website: "https://seraikitchen.com.au/"
    },
    {
      title: "NOMAD Melbourne",
      menu: "https://nomad.melbourne/",
      location: "187 Flinders Ln, Melbourne VIC 3000",
      website: "https://nomad.melbourne/"
    },
    {
      title: "Flower Drum Restaurant Melbourne",
      menu: "https://flowerdrum.melbourne/dinner-a-la-carte-menu/",
      location: "17 Market Ln, Melbourne VIC 3000",
      website: "http://www.flowerdrum.melbourne/"
    },
    {
      title: "Attica",
      menu: "https://www.attica.com.au/delivery",
      location: "74 Glen Eira Rd, Ripponlea VIC 3185",
      website: "http://www.attica.com.au/"
    },
    {
      title: "CHAE",
      menu: "N/A",
      location: "33 Mountain Rd, Cockatoo VIC 3781",
      website: "http://chae.com.au/"
    },
    {
      title: "Warabi",
      menu: "https://www.warabimelbourne.com/",
      location: "408 Flinders Ln, Melbourne VIC 3000",
      website: "https://www.warabimelbourne.com/"
    },
    {
      title: "Kazuki's Restaurant",
      menu: "https://kazukis.com.au/",
      location: "121 Lygon St, Carlton VIC 3053",
      website: "https://kazukis.com.au/"
    }
  ]

  places_in_melbourne.each do |object|
    new_place = Place.new(title: object[:title], menu: object[:menu], location: object[:menu], website: object[:website])
    p new_place.save
  end
end

def initialize_seed
  create_lists
  create_places
end

initialize_seed
