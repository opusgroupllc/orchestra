define(['chaplin'], function(Chaplin) {
  var Status = Chaplin.Model.extend({
    urlRoot: 'http://localhost:4567/api/v1/statuses'
  });

  return Status;
});