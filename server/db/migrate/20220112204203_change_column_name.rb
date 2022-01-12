class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :username, :email
  end
end
