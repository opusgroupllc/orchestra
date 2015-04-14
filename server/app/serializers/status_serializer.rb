class StatusSerializer < ActiveModel::Serializer
  attributes :id, :message

  has_one :user
  has_many :comments
end