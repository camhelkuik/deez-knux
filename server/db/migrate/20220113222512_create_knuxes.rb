class CreateKnuxes < ActiveRecord::Migration[7.0]
  def change
    create_table :knuxes do |t|
      t.string :knux
      t.timestamps
    end
  end
end
