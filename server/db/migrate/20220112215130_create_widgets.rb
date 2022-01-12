class CreateWidgets < ActiveRecord::Migration[7.0]
  def change
    create_table :widgets do |t|
      t.string :[fields]

      t.timestamps
    end
  end
end
