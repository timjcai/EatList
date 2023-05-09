class CreateListitems < ActiveRecord::Migration[7.0]
  def change
    create_table :listitems do |t|
      t.references :list, null: false, foreign_key: true
      t.references :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
