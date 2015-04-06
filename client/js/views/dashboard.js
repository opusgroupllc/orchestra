define(function(require) {

var Chaplin = require('chaplin'),
    NavbarView = require('views/navbar'),
    View = require('views/base/view');

var DashboardView = View.extend({
  autoRender: true,
  template: require('text!views/templates/dashboard_view.hbs'),
  className: 'dashboard'

  // navbarView: null,

  // initialize: function() {
  //   this.on('rendered', this.afterRender);
  // },

  // render: function() {
  //   this.$el.html(this.template);

  //   // trigger afterRender to bind jQuery functionality
  //   this.trigger('rendered');

  //   return this;
  // },

  // afterRender: function() {
  //   this.navbarView = new NavbarView();
  // }
});

return DashboardView;
});