class DeparturesController < ApplicationController

  def index
    @departures = Departure.all
     render component: 'Test', props: { departures: @departures }, tag: 'span', class: 'todo'
  end

end
