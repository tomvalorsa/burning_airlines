class ChangeReservedTypeInSeats < ActiveRecord::Migration
  def change
    change_column :seats, :reserved, :boolean, :default => false
  end
end
