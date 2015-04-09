define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      User = require('models/user'),
      mediator = require('mediator');

  // load sync replacement
  require('sync');

  var Application = Chaplin.Application.extend({

    initMediator: function() {
      return true;
    },

    start: function() {
      var self = this;

      User.me(function(err, user) {
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