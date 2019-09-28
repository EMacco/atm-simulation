require 'rails_helper'

RSpec.describe "Withdraw API", type: :request do
  describe "PATCH /transactions/deposit" do
    let!(:new_user) { create(:user) }

    context "User is logged in" do
      it "should pass" do
        login new_user
        patch "/api/v1/transactions/deposit", params: {
            amount: '3000'
        }
        expect(response).to have_http_status(:ok)
        expect(json["payload"]["transaction"]["amount"]).to eq(3000)
      end

      it "should return bad request" do
        login new_user
        patch "/api/v1/transactions/deposit", params: {
            amount: 'hdjs'
        }
        expect(response).to have_http_status(:bad_request)
      end
    end

    context "User is not logged in" do
      it "should return authentication error" do
        patch "/api/v1/transactions/deposit", params: {
            balance: '3000'
        }
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
