class CreateStatuses < ActiveRecord::Migration
  def self.up
    create_table :statuses do |t|
      t.belongs_to :user, index: true
      t.string :message
      t.timestamps
    end
  end

  def self.down
    drop_table :statuses
  end
end
