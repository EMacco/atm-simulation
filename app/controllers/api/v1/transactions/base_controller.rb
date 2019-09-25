module Api
  module V1
    module Transactions
      class BaseController < Api::V1::BaseController
        include TransactionHelper
      end
    end
  end
end
