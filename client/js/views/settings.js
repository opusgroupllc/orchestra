define(function(require) {

  var Chaplin = require('chaplin'),
      View = require('views/base/view'),
      NavbarView = require('views/navbar'),
      mediator = require('mediator');

  var Settings = View.extend({
    autoRender: true,
    template: require('text!views/templates/settings_view.hbs'),
    className: 'settings',

    render: function() {
      this.$el.html(_.template(this.template, { me: mediator.user }));
      this.navbarView = new NavbarView();
      return this;
    }
  });

  return Settings;
});