class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.integer :external_identifier, null: false
      t.integer :origin_id, null: false
      t.integer :destination_id, null: false
    end
  end
end
