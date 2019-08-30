class ChangeGroupToGroupName < ActiveRecord::Migration[5.2]
  def change
    rename_column :charts, :group, :group_name
  end
end
