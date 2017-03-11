require "rails_helper"

RSpec.describe Status, type: :model do
  it { should have_many(:departures) }
  it { should validate_presence_of :name }
end
