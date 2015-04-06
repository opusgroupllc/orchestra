define(function(require) {

  var Chaplin = require('chaplin'),
      View = require('views/base/view');

  var DashboardView = View.extend({
    autoRender: true,
    template: require('text!views/templates/dashboard_view.hbs'),
    className: 'dashboard'

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
    //   var self = this;

    //   this.username = this.$('#username');
    //   this.password = this.$('#password');

    //   this.delegate('submit', 'form', function(e) {
    //     self.$('form button').prop('disabled', true);

    //     if (!self.submitLogin()) {
    //       self.$('form button').prop('disabled', false);
    //     }

    //     e.preventDefault()
    //   });
    // }
  });

  return DashboardView;
});