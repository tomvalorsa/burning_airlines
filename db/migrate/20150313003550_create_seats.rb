class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.integer :flight_id
      t.integer :row
      t.integer :column
      t.boolean :reserved
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
