define(function() {
  'use strict';

  return function(match) {
    match('login', 'session#new');
    match('register', 'session#register')
    match('logout', 'session#logout');
    match('', 'dashboard#index');
    match('people', 'people#index');
  }
});