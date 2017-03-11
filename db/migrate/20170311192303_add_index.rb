class AddIndex < ActiveRecord::Migration
  def change
    add_index :trips, :external_identifier, unique: true
  end
end
