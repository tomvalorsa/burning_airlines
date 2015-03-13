class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_name
      t.string :origin
      t.string :destination
      t.datetime :flight_date
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
