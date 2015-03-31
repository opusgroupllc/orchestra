define(function(require) {
  'use strict';

  var Chaplin = require('chaplin');

  var Application = Chaplin.Application.extend({
    start: function() {
      Chaplin.Application.prototype.start.apply(this);

      if (!this.isLoggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
      }
    },

    isLoggedIn: function() {
      return (!!Chaplin.mediator.user);
    }
  });

  return Application;
});