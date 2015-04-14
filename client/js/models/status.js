define(function(require) {

  var Chaplin = require('chaplin'),
      Comment = require('models/comment');

  var Status = Chaplin.Model.extend({
    urlRoot: 'http://localhost:4567/api/v1/statuses',
    comment: function(message) {
      var comment = new Comment({ status_id: this.id, message: message });
      console.log(comment.toJSON());
      comment.save();
    }
  });

  return Status;
});