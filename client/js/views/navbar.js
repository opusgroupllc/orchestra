define(function(require) {

  var Chaplin = require('chaplin'),
      mediator = require('mediator'),
      View = require('views/base/view');

  var NavbarView = View.extend({
    el: $('body'),
    container: '#navbar',
    autoRender: true,
    template: require('text!views/templates/navbar_view.hbs'),
    className: 'orchestra-nav',

    render: function() {
      this.$el.html(_.template(this.template, { user: mediator.user }));
      return this;
    }
  });

  return NavbarView;
});