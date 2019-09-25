require "rails_helper"

RSpec.describe "Registration API", type: :request do
  describe "POST /auth/register" do
    let(:valid_attributes) do
      {
        first_name: Faker::Internet.name,
        last_name: Faker::Internet.parent_name,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        phone: Faker::Number.number(digits: 4)
      }
    end

    let(:invalid_attributes) do
      {
        first_name: "E",
        last_name: Faker::Internet.parent_name,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        phone: Faker::Number.number(digits: 12)
      }
    end

    context "when request is valid" do
      before { post "/api/v1/auth/register", params: valid_attributes }

      it "creates a user" do
        expect(json["payload"]["user"]["email"]).to eq(valid_attributes[:email])
      end

      it "returns status code 201" do
        expect(response).to have_http_status(201)
      end
    end

    context "when the request is invalid" do
      before { post "/api/v1/auth/register", params: invalid_attributes }

      it "returns status code 400" do
        expect(response).to have_http_status(400)
      end

      it "returns a validation failure message" do
        expect(json["errors"]["message"]).
          to eq("Validation failed: First name is too short (minimum is 2 characters)")
      end
    end
  end
end
