class FixUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :string
    remove_column :users, :username, :string
  end
end
