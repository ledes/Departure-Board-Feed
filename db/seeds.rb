require 'csv'

Departure.destroy_all;
Station.destroy_all;
Trip.destroy_all;
Track.destroy_all;
Status.destroy_all;

# Statuses
statuses = [
  "On Time",
  "Now Boarding",
  "All Aboard",
  "Delayed",
  "Cancelled",
  "Info to follow",
  "TBD",
  "Late",
  "Arriving",
  "Arrived",
  "Departed",
  "Hold",
  "End"
]

statuses.each do |status|
  Status.create(name: status)
end

# Origin stations
Station.create(name: "North Station")
Station.create(name: "South Station")

# CSV
initial_departures = File.read("#{Rails.root}/db/Departures.csv")
CSV.parse(initial_departures, headers: true) do |row|

  # Station
  origin = Station.find_by(name: row["Origin"])
  destination = Station.find_or_create_by(name: row['Destination'])

  # Track
  track_id = nil
  if !row["Track"].nil?
    track = Track.find_or_create_by(
      external_identifier: row["Track"].to_i,
      station_id: origin.id
    )
    track_id = track.id
  end

  # Trip
  trip = Trip.find_or_create_by(
    external_identifier: row["Trip"],
    origin_id: origin.id,
    destination_id: destination.id
  )

  # Departure
  status = Status.find_by(name: row['Status'])
  scheduled_Time = Time.at(row["ScheduledTime"].to_i)
  timeStamp = Time.at(row["TimeStamp"].to_i)

  Departure.find_or_create_by(
    track_id: track_id,
    status_id: status.id,
    trip_id: trip.id,
    lateness: row["Lateness"].to_i,
    scheduledtime: scheduled_Time,
    created_at: timeStamp,
    updated_at: timeStamp
  )
end
