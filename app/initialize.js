var Application = require('application');
var routes = require('routes');

$(function() {
  return new Application({
    controllerSuffix: '-controller',
    routes: routes
  });
});