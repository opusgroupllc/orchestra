define(function(require) {

  var Chaplin = require('chaplin'),
      Handlebars = require('handlebars');

  var View = Chaplin.View.extend({
    container: "body",

    getTemplateFunction: function() {
      var template = this.template;

      if (typeof template === 'string') {
        return Handlebars.compile(template);
      } else {
        return template;
      }
    }
  });

  return View;
});