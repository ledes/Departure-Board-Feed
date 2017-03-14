class DeparturesController < ApplicationController

  def index
    @table_data = format_data
  end

  private

  def format_data
    sorted_departures = Departure.all.sort_by{ |departure| departure.time }
    table_data = sorted_departures.map do |departure|
      trip = departure.trip
      destination = Station.find(trip.destination_id)
      origin = Station.find(trip.origin_id)
      track = departure.track ? departure.track.external_identifier : nil;
      { id: departure.id,
        origin: origin.name,
        destination: destination.name,
        trip: trip.external_identifier,
        track: track,
        time: departure.time.strftime("%I:%M %p"),
        status: departure.status.name
      }
    end
  end
end
