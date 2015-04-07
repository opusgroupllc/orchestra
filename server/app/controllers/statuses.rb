require_relative '../serializers/status_serializer.rb'

Orchestra::App.controllers :statuses do
  get :index, :map => '/api/v1/statuses' do
    ActiveModel::ArraySerializer.new(Status.all.order('id desc'), each_serializer: StatusSerializer).to_json
  end

  get :show, :map => '/api/v1/statuses/:id' do
    StatusSerializer.new(Status.find(params[:id]), root: false).to_json
  end

  options :new, :map => '/api/v1/statuses' do
    { hello: 'world' }.to_json
  end

  post :new, :map => '/api/v1/statuses' do
    params = JSON.parse request.body.read

    status = Status.new(params)
    status.user = User.find(1)

    if status.save
      StatusSerializer.new(status, root: false).to_json
    else
      error 101, { :error => "Unable to save status" }.to_json
    end
  end
end