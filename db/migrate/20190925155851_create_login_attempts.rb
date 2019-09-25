class CreateLoginAttempts < ActiveRecord::Migration[5.1]
  def change
    create_table :login_attempts do |t|
      t.integer :count, default: 0
      t.references :user

      t.timestamps
    end
  end
end
