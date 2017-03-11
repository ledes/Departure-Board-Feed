require "rails_helper"

RSpec.describe Departure, type: :model do
  it { should belong_to(:status) }
  # it { should belong_to(:trip) }
  # it { should belong_to(:track) }
  #
  # it { should validate_presence_of :status_id }
  # it { should validate_presence_of :trip_id }
  it { should validate_presence_of :lateness }
  it { should validate_presence_of :created_at }
end
