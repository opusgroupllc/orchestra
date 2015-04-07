define(function(require) {

var Chaplin = require('chaplin'),
    NavbarView = require('views/navbar'),
    View = require('views/base/view');

  var DashboardView = View.extend({
    autoRender: true,
    template: require('text!views/templates/dashboard_view.hbs'),
    className: 'dashboard',

    render: function() {
      this.$el.html(this.template);
      
      this.navbarView = new NavbarView();
      
      return this;
    }
  });

  return DashboardView;
});