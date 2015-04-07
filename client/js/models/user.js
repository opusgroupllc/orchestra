define(['chaplin'], function(Chaplin) {
  var User = Chaplin.Model.extend({
      urlRoot: 'http://localhost:4567/api/v1/users'
    },
    {
      me: function(cb) {
        var cb = cb || function() {};
        var token = window.localStorage.getItem('token');

        if (!token) return cb('not logged in');

        var req = $.ajax({
          type: 'GET',
          url: 'http://localhost:4567/api/v1/users/me',
          dataType: 'json',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        req.error(function(err) { return cb(err); });
        req.success(function(user) { return cb(null, user) });
      }
    });

  return User;
});