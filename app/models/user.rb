# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  password_digest :string
#  is_admin        :boolean          default("false")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#

class User < ActiveRecord::Base
end
