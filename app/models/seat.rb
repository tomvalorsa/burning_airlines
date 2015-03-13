# == Schema Information
#
# Table name: seats
#
#  id         :integer          not null, primary key
#  flight_id  :integer
#  row        :integer
#  column     :integer
#  reserved   :boolean          default("false")
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Seat < ActiveRecord::Base
  belongs_to :flight
  belongs_to :user
end
