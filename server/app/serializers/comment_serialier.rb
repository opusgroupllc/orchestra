class CommentSerializer < ActiveModel::Serializer
  attributes :id, :status, :user, :message 
end