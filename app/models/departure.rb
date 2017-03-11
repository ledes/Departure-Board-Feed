class Departure < ActiveRecord::Base
  belongs_to :status
  belongs_to :track
  # belongs_to :trip
  #
  # validates :status_id, presence: true
  # validates :trip_id, presence: true
  validates :lateness, presence: true
  validates :created_at, presence: true
end
