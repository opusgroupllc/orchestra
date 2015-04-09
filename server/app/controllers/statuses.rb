require_relative '../serializers/status_serializer.rb'
require_relative '../serializers/user_serializer.rb'

Orchestra::App.controllers :statuses do
  before :except => [:index_preflight] do
    verify_token
  end

  options :index_preflight, :map => '/api/v1/statuses' do
    200
  end

  get :index, :map => '/api/v1/statuses' do
    ActiveModel::ArraySerializer.new(Status.all.order('id desc'), each_serializer: StatusSerializer, user: UserSerializer).to_json
  end

  get :show, :map => '/api/v1/statuses/:id' do
    StatusSerializer.new(Status.find(params[:id]), root: false).to_json
  end

  post :new, :map => '/api/v1/statuses' do
    params = JSON.parse request.body.read

    status = Status.new(params)
    status.user = current_user

    if status.save
      StatusSerializer.new(status, root: false).to_json
    else
      error 101, { :error => "Unable to save status" }.to_json
    end
  end
end