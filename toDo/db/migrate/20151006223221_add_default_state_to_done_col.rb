class AddDefaultStateToDoneCol < ActiveRecord::Migration
  def change
    remove_column :todos, :done
    add_column :todos, :done, :boolean, null: false, default: false
  end
end
