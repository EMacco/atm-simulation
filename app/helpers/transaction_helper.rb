module TransactionHelper
  def create_transaction(user, type, amount, location)
    new_transaction = { transaction_type: type, amount: amount }
    new_transaction["location"] = location if location
    receipt = user.transactions.create!(new_transaction)
    { transaction: receipt, user: user }
  end
end
