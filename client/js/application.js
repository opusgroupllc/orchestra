define(['chaplin'], function(Chaplin) {
  'use strict';

  var Application = Chaplin.Application.extend({
    start: function() {
      Chaplin.Application.prototype.start.apply(this, arguments);
    }
  });

  return Application;
});