class Track < ActiveRecord::Base
  belongs_to :station
  has_many :departures
  validates :external_identifier, presence: true
end
