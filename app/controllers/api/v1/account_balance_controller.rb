module Api
  module V1
    class AccountBalanceController < Api::V1::BaseController
      def index
        unless @current_user
          return error_response("You are not logged in",
                                :unauthorized)
        end

        success_response({ balance: @current_user.balance })
      end
    end
  end
end