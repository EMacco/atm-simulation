require "rails_helper"

RSpec.describe User, type: :model do
  describe "Association" do
    it { should have_many(:transactions) }
    it { should have_one(:login_attempt) }
  end

  describe "Validations" do
    describe "#email" do
      it { should validate_presence_of(:email) }
      it { should_not allow_value("blah").for(:email) }
      it { should allow_value("a@b.com").for(:email) }
    end

    describe "#name" do
      it { should validate_presence_of(:first_name) }
      it { should validate_presence_of(:last_name) }
      it { should validate_length_of(:first_name).is_at_least(2) }
      it { should validate_length_of(:last_name).is_at_least(2) }
    end

    describe "#account_number" do
      it { should validate_numericality_of(:account_number) }
    end
  end
end
