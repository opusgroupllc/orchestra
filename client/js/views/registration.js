define(function(require) {

  var Chaplin = require('chaplin'),
      mediator = require('mediator'),
      View = require('views/base/view');

  var RegistrationView = View.extend({
    autoRender: true,
    template: require('text!views/templates/registration_view.hbs'),
    className: 'login',

    render: function() {
      this.$el.html(_.template(this.template));
      return this;
    }
  });

  return RegistrationView;
});