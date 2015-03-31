define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      User = require('models/user'),
      LoginView = require('views/login');

  var SessionController = Chaplin.Controller.extend({
    loginView: null,

    new: function() {
      this.loginView = new LoginView();
    }
  });

  return SessionController;
});