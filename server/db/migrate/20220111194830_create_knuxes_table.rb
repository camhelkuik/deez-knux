class CreateKnuxesTable < ActiveRecord::Migration[7.0]
  def change
    create_table :knuxes do |t|
      t.string :knux
    end
  end
end
