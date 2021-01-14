class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.references :player, null: false, foreign_key: true
      t.string :name
      t.integer :level
      t.references :job, null: false, foreign_key: true
      t.integer :atk
      t.integer :def
      t.integer :hp
      t.integer :exp
      t.integer :gold

      t.timestamps
    end
  end
end
