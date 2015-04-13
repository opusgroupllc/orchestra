define(function(require) {

var Chaplin = require('chaplin'),
    NavbarView = require('views/navbar'),
    Status = require('models/status'),
    StatusCollection = require('models/status_collection'),
    View = require('views/base/view');

  var DashboardView = View.extend({
    template: require('text!views/templates/dashboard_view.hbs'),
    className: 'dashboard',

    initialize: function() {
      var self = this;

      this.on('rendered', this.afterRender, this);

      this.statusCollection = new StatusCollection();

      window.x = new StatusCollection();

      this.statusCollection.fetch({
        success: function() {
          self.render();
        }
      });
    },

    render: function() {

      this.$el.html(_.template(this.template, { statuses: this.statusCollection.toJSON() }));
      
      this.navbarView = new NavbarView();

      this.trigger('rendered');
      
      return this;
    },

    refresh: function() {
      this.$el.html(_.template(this.template, { statuses: this.statusCollection.toJSON() }));
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
          self.statusCollection.add(status.toJSON(), { at: 0 });
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