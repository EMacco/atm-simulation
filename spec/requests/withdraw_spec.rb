require 'rails_helper'

RSpec.describe "Withdraw API", type: :request do
  describe "PATCH /transactions/withdraw" do
    let!(:new_user) { create(:user) }

    context "User is logged in" do
      it "should pass" do
        login new_user
        patch "/api/v1/transactions/withdraw", params: {
            amount: '3000'
        }
        expect(response).to have_http_status(:ok)
        expect(json["payload"]["transaction"]["amount"]).to eq(3000)
      end

      it "should return bad request" do
        login new_user
        patch "/api/v1/transactions/withdraw", params: {
            amount: 'hdjs'
        }
        expect(response).to have_http_status(:bad_request)
      end

      it "should return insufficient balance" do
        login new_user
        patch "/api/v1/transactions/withdraw", params: {
            amount: '100000'
        }

        expect(response).to have_http_status(:bad_request)
        expect(json["errors"]["global"]).to eq("Insufficient balance")
      end

      it "should return that you can withdraw in multiples of 500" do
        login new_user
        patch "/api/v1/transactions/withdraw", params: {
            amount: '423'
        }

        expect(response).to have_http_status(:bad_request)
        expect(json["errors"]["global"]).to eq("You can only withdraw in multiples of 500")
      end
    end

    context "User is not logged in" do
      it "should return authentication error" do
        patch "/api/v1/transactions/withdraw", params: {
            balance: '3000'
        }
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
