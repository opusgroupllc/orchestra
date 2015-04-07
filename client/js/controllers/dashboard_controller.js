define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      DashboardView = require('views/dashboard'),
      mediator = require('mediator');

  var DashboardController = Chaplin.Controller.extend({
    dashboardView: null,

    index: function() {
      if (!mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
        return false;
      }
      this.dashboardView = new DashboardView();
    }
  });

  return DashboardController;
});