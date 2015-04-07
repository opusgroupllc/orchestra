define(function(require) {
  var Chaplin = require('chaplin'),
      Status = require('models/status');

  var Statuses = Chaplin.Collection.extend({
    url: 'http://localhost:4567/api/v1/statuses',
    model: Status
  });

  return Statuses;
});