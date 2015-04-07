define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      User = require('models/user'),
      LoginView = require('views/login'),
      mediator = require('mediator');

  var SessionController = Chaplin.Controller.extend({
    loginView: null,

    new: function() {
      this.loginView = new LoginView();
    },

    logout: function() {
      mediator.logout();
      window.location = '/';
    }
  });

  return SessionController;
});