define(function(require) {

  var Chaplin = require('chaplin'),
      Comment = require('models/comment');

  var Status = Chaplin.Model.extend({
    urlRoot: 'http://localhost:4567/api/v1/statuses',
    comment: function(message, cb) {
      var cb = cb || function() {};


      var comment = new Comment({ status_id: this.id, message: message });
      comment.save(comment.toJSON(), {
        success: function() {
          return cb(true);
        },
        error: function() {
          return cb(false);
        }
      });
    }
  });

  return Status;
});