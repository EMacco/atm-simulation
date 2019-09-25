class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.string :transaction_type, null: false
      t.numeric :amount, null: false
      t.string :location, null: false, default: "Lagos, Nigeria"
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
