class Departure < ActiveRecord::Base
  belongs_to :status
  belongs_to :track
  belongs_to :trip

  validates :trip_id, presence: true
  validates :status_id, presence: true
  validates :lateness, presence: true
  validates :created_at, presence: true

  def time
    if !scheduledtime.blank?
      scheduledtime + lateness 
    end
  end
end
