class Character < ApplicationRecord
  belongs_to :player
  belongs_to :job
  has_many :character_items, dependent: :destroy
  has_many :items, through: :character_items
end
