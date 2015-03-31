define(function(require) {

  var View = require('views/base/view');

  var LoginView = View.extend({
    autoRender: true,
    template: require('text!views/templates/login_view.hbs'),

    // properties
    username: null,
    password: null,

    initialize: function() {
      this.on('rendered', this.afterRender);
    },

    render: function() {
      this.$el.html(this.template);

      // trigger afterRender to bind jQuery functionality
      this.trigger('rendered');

      return this;
    },

    afterRender: function() {
      var self = this;

      this.username = this.$('#username');
      this.password = this.$('#password');

      this.delegate('submit', 'form', function(e) {
        self.submitLogin();
        e.preventDefault();
      });
    },

    submitLogin: function() {
      console.log(this.username.val(), this.password.val());
    }
  });

  return LoginView;
});