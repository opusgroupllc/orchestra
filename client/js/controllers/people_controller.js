define(function(require) {
  'use strict';

  var Chaplin = require('chaplin'),
      Controller = require('controllers/base/controller'),
      PeopleView = require('views/people'),
      mediator = require('mediator');

  var PeopleController = Controller.extend({
    peopleView: null,

    index: function() {
      if (!this.authenticated()) return false;

      this.peopleView = new PeopleView();
    }
  });

  return PeopleController;
});