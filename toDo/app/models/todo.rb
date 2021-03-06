# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  done       :boolean          default(FALSE), not null
#

class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
end
