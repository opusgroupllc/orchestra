define(function(require) {

  var Chaplin = require('chaplin');

  var Comment = Chaplin.Model.extend({
    urlRoot: 'http://localhost:4567/api/v1/comments'
  });

  return Comment;
});