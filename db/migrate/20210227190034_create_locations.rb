class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.integer :priority
      t.belongs_to :Trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
