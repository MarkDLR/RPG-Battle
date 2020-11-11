class Monster < ApplicationRecord
    has_many :monster_items, dependent: :destroy
    has_many :items, through: :monster_items
end
