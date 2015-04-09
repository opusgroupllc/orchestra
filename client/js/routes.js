define(function() {
  'use strict';

  return function(match) {
    match('login', 'session#new');
    match('join', 'session#join')
    match('logout', 'session#logout');
    match('settings', 'session#settings')
    match('', 'dashboard#index');
    match('people', 'people#index');
  }
});