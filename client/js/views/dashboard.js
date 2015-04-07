define(function(require) {

var Chaplin = require('chaplin'),
    NavbarView = require('views/navbar'),
    View = require('views/base/view');

  var DashboardView = View.extend({
    autoRender: true,
    template: require('text!views/templates/dashboard_view.hbs'),
    className: 'dashboard',

    initialize: function() {
      this.$el.on('submit', '#new-status', this.post.bind(this));
    },

    render: function() {
      this.$el.html(this.template);
      
      this.navbarView = new NavbarView();
      
      return this;
    },

    post: function(event) {
      console.log('hai');

      // prevent the form from submitting
      event.preventDefault();
    }
  });

  return DashboardView;
});