class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :external_identifier, null: false
      t.belongs_to :station, null: false
    end
  end
end
