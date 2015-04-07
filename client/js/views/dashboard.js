define(function(require) {

var Chaplin = require('chaplin'),
    NavbarView = require('views/navbar'),
    Status = require('models/status'),
    Statuses = require('models/statuses'),
    View = require('views/base/view');

  var DashboardView = View.extend({
    template: require('text!views/templates/dashboard_view.hbs'),
    className: 'dashboard',

    initialize: function() {
      var self = this;

      this.$el.on('submit', '#new-status', this.post);

      this.statuses = new Statuses();

      this.statuses.fetch({
        success: function() {
          self.render();
        }
      });
    },

    render: function() {
      this.$el.html(_.template(this.template, { statuses: this.statuses.toJSON() }));
      
      this.navbarView = new NavbarView();
      
      return this;
    },

    post: function(event) {
      // prevent the form from submitting
      event.preventDefault();

      var message = $(this.status).val();

      var status = new Status({ message: message });
      status.save(status.toJSON);

      console.log(status.get('message'));
    }
  });

  return DashboardView;
});