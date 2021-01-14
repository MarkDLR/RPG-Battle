class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :name
      t.string :description
      t.string :img
      t.integer :hp
      t.integer :def
      t.integer :atk
      t.integer :gold

      t.timestamps
    end
  end
end
