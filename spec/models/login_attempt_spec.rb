require "rails_helper"

RSpec.describe LoginAttempt, type: :model do
  describe "Association" do
    it { should belong_to(:user) }
  end

  describe "Validations" do
    describe "#count" do
      it { should validate_presence_of(:count) }
    end
  end
end
