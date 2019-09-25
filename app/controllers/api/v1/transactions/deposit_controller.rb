module Api
  module V1
    module Transactions
      class DepositController < Api::V1::Transactions::BaseController
        def update
          unless @current_user
            return error_response("You are not logged in",
                                  :unauthorized)
          end

          details = strip_whitespace(transaction_details)
          amount = details["amount"].to_i
          unless amount.positive?
            return error_response(global:
                                      "Invalid amount")
          end

          @current_user.balance += amount
          @current_user.save!

          success_response create_transaction @current_user,
                                              "deposit",
                                              amount,
                                              details["location"]
        end

        def transaction_details
          params.permit(:amount, :location)
        end
      end
    end
  end
end
