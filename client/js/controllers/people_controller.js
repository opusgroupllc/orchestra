define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      PeopleView = require('views/people'),
      // NavbarView = require('views/navbar'),
      mediator = require('mediator');

  var PeopleController = Chaplin.Controller.extend({
    peopleView: null,
    // navbarView: null,

    index: function() {
      if (!mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
        return false;
      }

      this.peopleView = new PeopleView();
      // this.navbarView = new NavbarView();
    }
  });

  return PeopleController;
});