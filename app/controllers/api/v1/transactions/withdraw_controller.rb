module Api
  module V1
    module Transactions
      class WithdrawController < Api::V1::Transactions::BaseController
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

          @current_user.balance -= amount

          unless @current_user.balance.positive?
            return error_response(global:
                                      "insufficient balance")
          end

          unless (amount % 500).zero?
            return error_response(global:
                                      "You can only withdraw in multiples of 500")
          end

          @current_user.save!

          success_response create_transaction @current_user,
                                              "withdrawal",
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
