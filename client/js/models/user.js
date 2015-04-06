define(['chaplin'], function(Chaplin) {
  var User = Chaplin.Model.extend({
    urlRoot: 'http://localhost:4567/api/v1/users'
  });

  return User;
});