require.config({
  shim: {
    bootstrap : { deps :['jquery'] }
  },
  paths: {
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore-min',
    chaplin: 'vendor/chaplin.min',
    backbone: 'vendor/backbone-min',
    text: 'vendor/text',
    handlebars: 'vendor/handlebars',
    bootstrap: 'vendor/bootstrap.min'
  }
});

define(['application', 'routes', 'bootstrap'], function(Application, routes, $) {
  new Application({ routes: routes });
});