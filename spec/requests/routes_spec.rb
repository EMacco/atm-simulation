require "rails_helper"

RSpec.describe "404 Route", type: :request do
  describe "GET /invalid-route" do
    context "when user visits a route that does not exist" do
      before { get "/api/v1/auth/invalid-route" }

      it "returns No route matches invalid-route" do
        expect(json["errors"]["global"]).
            to eq("No route matches v1/auth/invalid-route")
      end

      it "returns status code 404" do
        expect(response).to have_http_status(404)
      end
    end
  end
end
