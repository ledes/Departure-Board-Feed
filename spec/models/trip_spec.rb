require "rails_helper"

RSpec.describe Trip, type: :model do
  it { should have_many(:departures) }
  it { should validate_presence_of :external_identifier }
end
