require "rails_helper"

RSpec.describe Station, type: :model do
  it { should have_many(:tracks) }
  it { should validate_presence_of :name }
end
