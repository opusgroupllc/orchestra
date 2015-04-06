define(function(require) {

  var Chaplin = require('chaplin'),
      People = require('models/people'),
      NavbarView = require('views/navbar'),
      View = require('views/base/view');

  var PeopleView = View.extend({
    autoRender: true,
    template: require('text!views/templates/people_view.hbs'),
    className: 'people',

    navbarView: false,

    initialize: function() {
      var self = this;

      this.people = new People();

      this.people.fetch({
        success: function() {
          self.render();
        }
      });
    },

    render: function() {
      this.$el.html(_.template(this.template, { people: this.people.toJSON() }));
      this.navbarView = new NavbarView();
      return this;
    }
  });

  return PeopleView;
});