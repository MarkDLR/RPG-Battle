class CreateMonsters < ActiveRecord::Migration[6.0]
  def change
    create_table :monsters do |t|
      t.string :name
      t.string :difficulty
      t.string :img
      t.integer :atk
      t.integer :def
      t.integer :hp
      t.integer :exp

      t.timestamps
    end
  end
end
