define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      mediator = require('mediator');

  var Application = Chaplin.Application.extend({

    initMediator: function() {
      mediator.user = window.localStorage.getItem('token');
      mediator.seal();
    },

    start: function() {
      this.initMediator();

      if (!mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
      }

      Chaplin.Application.prototype.start.apply(this);
    }
  });

  return Application;
});