class DeparturesController < ApplicationController

  def index
    @departures = Departure.all
    render component: 'DeparturesBoard', props: { departures: @departures }, tag: 'span', class: 'departures-board'
  end

end
