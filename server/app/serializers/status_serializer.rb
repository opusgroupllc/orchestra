class StatusSerializer < ActiveModel::Serializer
  attributes :id, :message, :user
end