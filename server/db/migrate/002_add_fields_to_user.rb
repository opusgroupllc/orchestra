class AddFieldsToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :full_name, :string
    add_column :users, :title, :string
    add_column :users, :username, :string
    add_column :users, :location, :string
    add_column :users, :github, :string
    add_column :users, :twitter, :string
  end

  def self.down
    drop_column :users, :full_name
    drop_column :users, :title
    drop_column :users, :username
    drop_column :users, :location
    drop_column :users, :github
    drop_column :users, :twitter
  end
end