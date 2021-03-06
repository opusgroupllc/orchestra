define(function(require) {

  var Chaplin = require('chaplin'),
      mediator = require('mediator'),
      View = require('views/base/view');

  var LoginView = View.extend({
    autoRender: true,
    template: require('text!views/templates/login_view.hbs'),
    className: 'login',

    // properties
    username: null,
    password: null,

    initialize: function() {
      if (mediator.loggedIn()) {
        Chaplin.utils.redirectTo({ url: '/' });
      }

      this.on('rendered', this.afterRender, this);
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
        self.$('form button').prop('disabled', true);

        if (!self.submitLogin()) {
          self.$('form button').prop('disabled', false);
        }

        e.preventDefault();
      });
    },

    submitLogin: function() {
      if (this.username.val().trim().length <= 0) {
        this.username.addClass('error');
        this.showError('Please enter a username or email.');
        return false;
      }
      if (this.password.val().trim().length <= 0) {
        this.password.addClass('error');
        this.showError('Please enter your password.');
        return false;
      }

      this.tryToLogin();
      return true;
    },

    showError: function(message) {
      this.$('#status').css('visibility', 'visible');
      this.$('#status .message').text(message);
    },

    tryToLogin: function() {
      var req = $.ajax({
        type: 'POST',
        url: 'http://localhost:4567/api/v1/users/sessions',
        data: { email: this.username.val().trim(), password: this.password.val().trim() },
        dataType: 'json'
      });
      req.error(this.authError.bind(this));
      req.success(this.authSuccess.bind(this));
    },

    authError: function(err) {
      var error = (err && err.responseJSON) ? err.responseJSON.error : err.statusText;
      this.$('form button').prop('disabled', false);
      this.showError(error);
    },

    authSuccess: function(res) {
      window.localStorage.setItem('token', res.token);

      window.location = '/';
    }
  });

  return LoginView;
});