class AddPlaylistToCharts < ActiveRecord::Migration[5.2]
  def change
    add_reference :charts, :playlist, foreign_key: true
  end
end
