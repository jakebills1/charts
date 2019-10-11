class AddCloudinaryIdToCharts < ActiveRecord::Migration[6.0]
  def change
    add_column :charts, :cloudinary_id, :string
  end
end
