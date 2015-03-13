# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string
#  rows       :integer
#  columns    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Airplane < ActiveRecord::Base
end
