define('project-app/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'project-app/config/environment'], function (exports, _torii, _configuration, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _configuration.configure)(_environment.default.torii || {});
      (0, _torii.default)(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports.default = initializer;
});