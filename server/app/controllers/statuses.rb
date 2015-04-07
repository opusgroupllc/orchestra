require_relative '../serializers/status_serializer.rb'

Orchestra::App.controllers :statuses do
  get :index, :map => '/api/v1/statuses' do
    ActiveModel::ArraySerializer.new(Status.all, each_serializer: StatusSerializer).to_json
  end

  get :index, :map => '/api/v1/statuses/:id' do
    StatusSerializer.new(Status.find(params[:id]), root: false).to_json
  end
end