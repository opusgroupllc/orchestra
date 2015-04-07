define(function(require) {
  'use strict';

  var Chaplin = require('chaplin');

  var mediator = Chaplin.mediator;

  mediator.loggedIn = function() {
    return !!this.user;
  }

  mediator.logout = function() {
    this.user = null;
    window.localStorage.removeItem('token');
  }

  return mediator;
});