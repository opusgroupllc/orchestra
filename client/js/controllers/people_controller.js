define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      NavbarView = require('views/navbar'),
      PeopleView = require('views/people'),
      mediator = require('mediator');

  var PeopleController = Chaplin.Controller.extend({
    navbarView: null,
    peopleView: null,

    index: function() {
      if (!mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
        return false;
      }
      this.peopleView = new PeopleView();
      this.navbarView = new NavbarView();
    }
  });

  return PeopleController;
});