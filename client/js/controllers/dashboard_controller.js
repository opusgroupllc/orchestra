define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      DashboardView = require('views/dashboard'),
      NavbarView = require('views/navbar'),
      mediator = require('mediator');

  var DashboardController = Chaplin.Controller.extend({
    dashboardView: null,
    navbarView: null,

    index: function() {
      if (!mediator.loggedIn()) {
        return false;
      }
      this.dashboardView = new DashboardView();
      this.navbarView = new NavbarView();
    }
  });

  return DashboardController;
});