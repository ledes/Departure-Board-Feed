class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.string name, null: false
    end
  end
end
