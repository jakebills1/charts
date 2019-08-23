class CreateCharts < ActiveRecord::Migration[5.2]
  def change
    create_table :charts do |t|
      t.string :name
      t.string :url
      t.string :artist
      t.string :group
      t.string :genre
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
