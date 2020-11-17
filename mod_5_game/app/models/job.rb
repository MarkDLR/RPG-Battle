class Job < ApplicationRecord
    has_many :characters, dependent: :destroy
end
