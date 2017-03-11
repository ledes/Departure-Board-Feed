class CreateDepartures < ActiveRecord::Migration
  def change
    create_table :departures do |t|
      t.integer :lateness, default: 0
      t.datetime :scheduledtime

      t.belongs_to :trip, null: false
      t.belongs_to :status, null: false
      t.belongs_to :track

      t.timestamps null: false
    end
  end
end
