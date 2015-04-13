define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      mediator = require('mediator');

  var Controller = Chaplin.Controller.extend({
    authenticated: function() {
      if (!mediator.loggedIn()) {
        this.redirectToLogin();
        return false;
      }
      return true;
    },

    redirectToLogin: function() {
      Chaplin.utils.redirectTo({ url: 'login' });
    }
  });

  return Controller;
});