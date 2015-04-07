define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      User = require('models/user'),
      mediator = require('mediator');

  var Application = Chaplin.Application.extend({

    initMediator: function() {
      return true;
    },

    start: function() {
      var self = this;

      User.me(function(err, user) {
        if (err) return self.redirectToLogin();
        
        mediator.user = user;

        self.router.startHistory();
        self.started = true;
      });
    },

    redirectToLogin: function() {
      Chaplin.utils.redirectTo({ url: 'login' });
    }
  });

  return Application;
});