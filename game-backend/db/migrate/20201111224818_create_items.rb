class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :item_type
      t.string :sub_type
      t.integer :atk
      t.integer :def
      t.integer :hp
      t.boolean :character_equipped

      t.timestamps
    end
  end
end
