define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      Controller = require('controllers/base/controller'),
      DashboardView = require('views/dashboard'),
      mediator = require('mediator');

  var DashboardController = Controller.extend({
    dashboardView: null,

    index: function() {
      if (!this.authenticated()) return false;

      this.dashboardView = new DashboardView();
    }
  });

  return DashboardController;
});