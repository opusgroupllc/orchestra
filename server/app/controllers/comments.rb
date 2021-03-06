require_relative '../serializers/comment_serializer.rb'

Orchestra::App.controllers :comments do

  before :except => [:index_preflight, :show_preflight] do
    verify_token
  end

  options :index_preflight, :map => '/api/v1/comments' do
    200
  end

  options :show_preflight, :map => '/api/v1/comments/:id' do
    200
  end

  get :show, :map => '/api/v1/comments/:id' do
    CommentSerializer.new(Comment.find(params[:id]), root: false).to_json
  end

  delete :destroy, :map => '/api/v1/comments/:id' do
    comment = Comment.find(params[:id])
    comment.destroy

    comment.to_json
  end

  post :new, :map => '/api/v1/comments' do
    params = JSON.parse request.body.read

    comment = Comment.new(params)
    comment.user = current_user

    if comment.save
      CommentSerializer.new(comment, root: false).to_json
    else
      error 101, { :error => "Unable to save comment" }.to_json
    end
  end
end
