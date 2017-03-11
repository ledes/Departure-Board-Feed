require 'csv'

initial_departures = File.read("#{Rails.root}/db/Departures.csv")

CSV.parse(initial_departures, :headers => true) do |row|
  binding.pry
  #create objects from row information
end
