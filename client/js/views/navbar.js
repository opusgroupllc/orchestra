define(function(require) {

  var Chaplin = require('chaplin'),
      View = require('views/base/view');

  var NavbarView = View.extend({
    container: '#navbar',
    autoRender: true,
    template: require('text!views/templates/navbar_view.hbs'),
    className: 'orchestra-nav'
  });

  return NavbarView;
});