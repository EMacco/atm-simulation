module Api
  class BaseController < ApplicationController
    def raise_not_found!
      render json: {
          status: :not_found,
          errors: {
              global: "No route matches #{params[:unmatched_route]}"
          }
      },
             status: :not_found
    end
  end
end