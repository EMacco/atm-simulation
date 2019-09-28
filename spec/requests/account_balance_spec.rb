require 'rails_helper'

RSpec.describe "Account Balance API", type: :request do
  describe "GET /account_balance" do
    let!(:new_user) { create(:user) }

    context "User is logged in and can see balance" do
      it "should pass" do
        login new_user
        get "/api/v1/account_balance"
        expect(response).to have_http_status(:ok)
        expect(json["payload"]["balance"]).to eq(5000)
      end
    end

    context "User is not logged in" do
      it "should return authentication error" do
        get "/api/v1/account_balance"
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
