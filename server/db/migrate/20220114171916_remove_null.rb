class RemoveNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:oauth_access_tokens, :application_id, false)
  end
end
