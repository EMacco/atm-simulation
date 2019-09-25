require "rails_helper"

RSpec.describe Transaction, type: :model do
  describe "Association" do
    it { should belong_to(:user) }
  end

  describe "Validations" do
    describe "#transaction_type" do
      it { should validate_presence_of(:transaction_type) }
    end

    describe "#amount" do
      it { should validate_presence_of(:amount) }
      it { should validate_numericality_of(:amount) }
    end
  end
end
