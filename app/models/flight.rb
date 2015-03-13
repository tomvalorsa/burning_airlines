# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  flight_name :string
#  origin      :string
#  destination :string
#  flight_date :datetime
#  airplane_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
end
