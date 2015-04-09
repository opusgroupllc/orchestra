define(function(require) {

  var Chaplin = require('chaplin'),
      mediator = require('mediator'),
      View = require('views/base/view');

  var JoinView = View.extend({
    autoRender: true,
    template: require('text!views/templates/join_view.hbs'),
    className: 'login',

    // properties
    username: null,
    password: null,

    initialize: function() {
      this.on('rendered', this.afterRender, this);
    },

    render: function() {
      this.$el.html(_.template(this.template));

      this.trigger('rendered');

      return this;
    },

    afterRender: function() {
      this.username = this.$('#username');
      this.password = this.$('#password');

      this.delegate('submit', 'form', this.tryToJoin);
    },

    tryToJoin: function(event) {
      event.preventDefault();

      console.log('hej.');
    },

    validateUsername: function() {

    },

    validatePassword: function() {

    }
  });

  return JoinView;
});