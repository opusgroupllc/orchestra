class CreateComments < ActiveRecord::Migration
  def self.up
    create_table :comments do |t|
      t.belongs_to :status, index: true
      t.belongs_to :user
      t.string :message
      t.timestamps
    end
  end

  def self.down
    drop_table :comments
  end
end