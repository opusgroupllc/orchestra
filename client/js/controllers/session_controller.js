define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      Controller = require('controllers/base/controller'),
      User = require('models/user'),
      LoginView = require('views/login'),
      JoinView = require('views/join'),
      SettingsView = require('views/settings'),
      mediator = require('mediator');

  var SessionController = Controller.extend({
    loginView: null,
    joinView: null,

    new: function() {
      this.loginView = new LoginView();
    },

    logout: function() {
      if (!this.authenticated()) return false;

      mediator.logout();
      window.location = '/';
    },

    join: function() {
      this.joinView = new JoinView();
    },

    settings: function() {
      if (!this.authenticated()) return false;

      this.settingsView = new SettingsView();
    }
  });

  return SessionController;
});