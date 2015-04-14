class StatusSerializer < ActiveModel::Serializer
  attributes :id, :message, :user

  has_many :comments
end