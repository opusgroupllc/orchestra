define(['chaplin'], function(Chaplin) {
  var SessionController = Chaplin.Controller.extend({
    new: function() {
      $("form").submit(function(event) {
        console.log("hai.");
        
        // prevent the form from being actually posted
        event.preventDefault();
      });
    }
  });

  return SessionController;
});