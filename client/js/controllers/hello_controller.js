define(['chaplin'], function(Chaplin) {
  var HelloController = Chaplin.Controller.extend({
    show: function() {
      console.log("hai.");
    }
  });

  return HelloController;
});