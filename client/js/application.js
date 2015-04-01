define(function(require) {
  'use strict';

  var Chaplin = require('chaplin');

  var Application = Chaplin.Application.extend({

    initMediator: function() {
      Chaplin.mediator.user = window.localStorage.getItem('token');
      Chaplin.mediator.seal();
    },

    start: function() {
      this.initMediator();

      if (!this.isLoggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
      }

      Chaplin.Application.prototype.start.apply(this);
    },

    isLoggedIn: function() {
      return (!!Chaplin.mediator.user);
    }
  });

  return Application;
});