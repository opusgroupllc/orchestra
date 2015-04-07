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

    refresh: function() {
      this.$el.html(_.template(this.template, { statuses: this.statuses.toJSON() }));
    },

    afterRender: function() {
      var self = this;

      this.delegate('submit', '#new-status', this.post);
      this.delegate('keydown', '#new-status [name="status"]', this.keyDown);
    },

    post: function(e) {
      e.preventDefault();

      var self = this;

      var message = $("#new-status [name='status']").val();

      if (message.length === 0) return false;

      var status = new Status();
      status.save({ message: message }, {
        success: function(status) {
          self.statuses.add(status.toJSON(), { at: 0 });
          self.refresh();
          $("#new-status [name='status']").focus();
        }
      });
    },

    keyDown: function(e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
        $("#new-status").submit();
      }
    }
  });

  return DashboardView;
});