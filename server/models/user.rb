require 'bcrypt'

class User < ActiveRecord::Base
  def password
    @password ||= BCrypt::Password.new(read_attribute(:password))
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    write_attribute(:password, @password)
  end
end