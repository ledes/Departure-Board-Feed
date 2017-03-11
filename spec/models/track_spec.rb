require "rails_helper"

RSpec.describe Track, type: :model do
  it { should have_many(:departures) }
  # it { should belong_to(:station) }
  it { should validate_presence_of :external_identifier }
end
