define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      PeopleView = require('views/people'),
      mediator = require('mediator');

  var PeopleController = Chaplin.Controller.extend({
    peopleView: null,

    index: function() {
      if (!mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: 'login' });
        return false;
      }

      this.peopleView = new PeopleView();
    }
  });

  return PeopleController;
});