require.config({
  paths: {
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore-min',
    chaplin: 'vendor/chaplin.min',
    backbone: 'vendor/backbone-min'
  }
});

define(['application', 'routes'], function(Application, routes) {
  new Application({ routes: routes });
});