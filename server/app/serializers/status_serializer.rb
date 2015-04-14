class StatusSerializer < ActiveModel::Serializer
  attributes :id, :message, :user, :comments
end