class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :score
      t.string :comment
      t.references :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
