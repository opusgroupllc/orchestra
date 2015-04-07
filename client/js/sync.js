define(function(require) {
  var Backbone = require('backbone');

  var sync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    options.beforeSend = function(xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    }
    sync.call(this, method, model, options);
  }
});