class UpdateDoorkeeperTable < ActiveRecord::Migration[7.0]
  def change
    # Uncomment below to ensure a valid reference to the resource owner's table
add_foreign_key :oauth_access_grants, :users, column: :resource_owner_id
add_foreign_key :oauth_access_tokens, :users, column: :resource_owner_id
  end
end
