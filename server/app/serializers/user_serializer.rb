class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :gravatar, :full_name, :title, :location, :github, :twitter
end