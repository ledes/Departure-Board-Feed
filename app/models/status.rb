class Status < ActiveRecord::Base
  has_many :departures
  validates :name, presence: true
end
