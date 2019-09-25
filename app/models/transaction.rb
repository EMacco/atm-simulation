class Transaction < ApplicationRecord
  validates :type, presence: true
  validates :amount, presence: true, numericality: true
  validates :location, allow_nil: true, length: { minimum: 3 }

  belongs_to :user, dependent: :destroy
end
