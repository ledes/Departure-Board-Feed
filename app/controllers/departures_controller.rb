class DeparturesController < ApplicationController

  def index
    tableData = Departure.all.map do |departure|
      trip = departure.trip
      destination = Station.find(trip.destination_id)
      origin = Station.find(trip.origin_id)
      track = departure.track ? departure.track.external_identifier : nil;
      { id: departure.id,
        origin: origin.name,
        destination: destination.name,
        trip: trip.external_identifier,
        track: track,
        time: departure.time,
        status: departure.status.name
      }
    end

    render component: 'DeparturesBoard', props: { tableData: tableData }, tag: 'span', class: 'departures-board'
  end

end
