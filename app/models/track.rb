class Track < ActiveRecord::Base
  validates :external_identifier, presence: true
  has_many :departures
  # belongs_to :station
end
