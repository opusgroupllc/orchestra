define(function(require) {

  var Chaplin = require('chaplin'),
      People = require('models/people'),
      NavbarView = require('views/navbar'),
      View = require('views/base/view');

  var PeopleView = View.extend({
    template: require('text!views/templates/people_view.hbs'),
    className: 'people',

    navbarView: false,
    people: false,

    initialize: function() {
      var self = this;

      this.on('rendered', this.afterRender, this);

      this.people = new People();

      this.people.fetch({
        success: function() {
          self.render();
        }
      });
    },

    render: function() {
      this.$el.html(_.template(this.template, { people: this.people.toJSON() }));

      this.trigger('rendered');

      return this;
    },

    afterRender: function() {
      this.navbarView = new NavbarView();
    }
  });

  return PeopleView;
});