define(function(require) {

  var Chaplin = require('chaplin'),
      View = require('views/base/view');

  var PeopleView = View.extend({
    autoRender: true,
    template: require('text!views/templates/people_view.hbs'),
    className: 'people'
  });

  return PeopleView;
});