define(function() {
  'use strict';

  return function(match) {
    match('login', 'session#new');
    match('', 'dashboard#index');
  }
});