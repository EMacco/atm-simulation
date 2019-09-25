class LoginAttempt < ApplicationRecord
  validates :count, presence: true, numericality: true

  belongs_to :user, dependent: :destroy
end
