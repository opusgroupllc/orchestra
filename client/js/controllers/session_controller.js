define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      Controller = require('controllers/base/controller'),
      User = require('models/user'),
      LoginView = require('views/login'),
      RegistrationView = require('views/registration'),
      mediator = require('mediator');

  var SessionController = Controller.extend({
    loginView: null,
    registrationView: null,

    new: function() {
      this.loginView = new LoginView();
    },

    logout: function() {
      if (!this.authenticated()) return false;

      mediator.logout();
      window.location = '/';
    },

    register: function() {
      this.registrationView = new RegistrationView();
    }
  });

  return SessionController;
});