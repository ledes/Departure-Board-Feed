class Departure < ActiveRecord::Base
  belongs_to :status
  belongs_to :track
  # belongs_to :trip
  #
  # validates :trip_id, presence: true
  validates :status_id, presence: true
  validates :lateness, presence: true
  validates :created_at, presence: true
end
