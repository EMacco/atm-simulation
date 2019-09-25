class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.numeric :account_number, null: false
      t.numeric :balance, null: false, default: 5000
      t.numeric :password_digest, null: false
      t.boolean :active, null: false, default: true

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :account_number, unique: true
  end
end
