define(function(require) {

  var View = require('views/base/view');

  var LoginView = View.extend({
    autoRender: true,
    template: require('text!views/templates/login_view.hbs'),
    className: 'login',

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
      if (this.username.val().trim().length <= 0) {
        this.username.addClass('error');
        this.showError('Please enter a username or email');
        return false;
      }
      if (this.password.val().trim().length <= 0) {
        this.password.addClass('error');
        this.showError('Please enter your password');
        return false;
      }

      this.tryLogin();
      return false;
    },

    tryLogin: function() {
      var req = $.ajax({
        type: 'POST',
        url: 'http://localhost:4567/api/v1/users/' + this.username.val().trim() + '/sessions',
        data: { password: this.password.val().trim() },
        dataType: 'json'
      });
      req.error(this.authError);
      req.success(this.authSuccess);
    },

    authError: function(err) {
      console.log('error');
    },

    authSuccess: function() {
      console.log('success!');
    }
  });

  return LoginView;
});