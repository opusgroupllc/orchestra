define(function(require) {
  var Chaplin = require('chaplin'),
      User = require('models/user');

  var People = Chaplin.Collection.extend({
    url: 'http://localhost:4567/api/v1/users',
    model: User
  });

  return People;
});