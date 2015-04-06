class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :full_name, :title, :location, :github, :twitter
end