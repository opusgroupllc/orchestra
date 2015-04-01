define(function(require) {
  'use strict';

  var Chaplin = require('chaplin');

  var DashboardController = Chaplin.Controller.extend({
    // loginView: null,
    index: function() {
      if (!!!Chaplin.mediator.user) {
        console.log("nope.", Chaplin.mediator);
        return false;
      }
      console.log("o hai.");
      window.localStorage.removeItem('token');
      // this.loginView = new LoginView();
    }
  });

  return DashboardController;
});