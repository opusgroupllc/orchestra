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

      this.on('rendered', this.afterRender, this);

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

      this.trigger('rendered');
      
      return this;
    },

    afterRender: function() {
      var self = this;

      $(window).keydown(function(event) {
        if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
          $("#new-status").submit();
        }
      });

      this.delegate('submit', '#new-status', function(e) {
        event.preventDefault();

        var message = $("#new-status [name='status']").val();

        if (message.length === 0) return false;

        var status = new Status();
        status.save({ message: message }, {
          success: function(status) {
            self.statuses.add(status.toJSON(), { at: 0 });
            self.render();
          }
        });
      });
    }
  });

  return DashboardView;
});