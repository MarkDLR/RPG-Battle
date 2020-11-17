class Item < ApplicationRecord
    has_many :character_items, dependent: :destroy
    has_many :characters, through: :character_items
    has_many :monster_items, dependent: :destroy
    has_many :monsters, through: :monster_items
end
