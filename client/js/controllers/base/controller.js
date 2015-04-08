define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      mediator = require('mediator');

  var Controller = Chaplin.Controller.extend({
    authenticated: function() {
      if (!mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
        return false;
      }
      return true;
    }
  });

  return Controller;
});