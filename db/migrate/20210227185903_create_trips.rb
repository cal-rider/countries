class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :slug
      t.integer :priority

      t.timestamps
    end
  end
end
