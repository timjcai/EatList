class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :title
      t.string :menu
      t.text :location
      t.string :slug
      t.string :website

      t.timestamps
    end
  end
end
