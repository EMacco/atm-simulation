class User < ApplicationRecord
  has_secure_password
  before_create :generate_account_number

  validates :first_name, :last_name, presence: true, length: { minimum: 2 }
  validates :email, presence: true,
                    uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password_digest, presence: true, length: { minimum: 4 }
  validates :account_number, :balance, :active, allow_nil: true, numericality: true

  has_many :transactions, dependent: :destroy
  has_one :login_attempt, dependent: :destroy

  private

  def generate_account_number
    self.account_number = rand(10**10)
  end
end
