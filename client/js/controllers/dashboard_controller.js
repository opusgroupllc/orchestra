define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      DashboardView = require('views/dashboard'),
      NavbarView = require('views/navbar');

  var DashboardController = Chaplin.Controller.extend({
    dashboardView: null,

    index: function() {
      if (!!!Chaplin.mediator.user) {
        return false;
      }
      this.dashboardView = new DashboardView();

      this.subView('navbar', new NavbarView());
    }
  });

  return DashboardController;
});