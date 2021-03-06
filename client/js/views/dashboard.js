define(function(require) {

var Chaplin = require('chaplin'),
    NavbarView = require('views/navbar'),
    Status = require('models/status'),
    StatusCollection = require('models/status_collection'),
    Comment = require('models/comment'),
    View = require('views/base/view');

  var DashboardView = View.extend({
    template: require('text!views/templates/dashboard_view.hbs'),
    className: 'dashboard',

    initialize: function() {
      var self = this;

      this.on('rendered', this.afterRender, this);

      this.statusCollection = new StatusCollection();

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
      var self = this;

      this.statusCollection.fetch({
        success: function() {
          self.$el.html(_.template(self.template, { statuses: self.statusCollection.toJSON() }));
        }
      });
    },

    afterRender: function() {
      var self = this;

      this.delegate('submit', '#new-status', this.post);
      this.delegate('keydown', '#new-status [name="status"]', this.keyDown);
      this.delegate('keydown', '.new-comment', this.checkComment);
      this.delegate('click', '.links .delete', this.handleDelete);
    },

    handleDelete: function(e) {
      e.preventDefault();

      var input = $(e.currentTarget),
          commentId = input.attr('id').split("_")[1];

      this.deleteComment(commentId);
    },

    deleteComment: function(id) {
      var self = this;

      var comment = new Comment({ id: id });
      comment.destroy({
        success: function(model, res) {
          self.refresh();
        }
      });
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
    },

    checkComment: function(e) {
      if (e.keyCode == 13) {
        var input = $(e.currentTarget);
        this.newComment(input.attr('id'), input.val());
      }
    },

    newComment: function(status, message) {
      var self = this;

      var status = this.statusCollection.get(status);
      status.comment(message, function(saved) {
        if (saved) {
          self.refresh();
        }
      });
    },
  });

  return DashboardView;
});