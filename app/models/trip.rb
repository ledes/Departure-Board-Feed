class Trip < ActiveRecord::Base
  has_many :departures
  validates :external_identifier, presence: true
end
