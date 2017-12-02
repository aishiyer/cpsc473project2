define('project-app/router', ['exports', 'project-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('messages');
    this.route('pictures');
    this.route('sign-up');
    this.route('sign-in');
    this.route('protected');
  });

  exports.default = Router;
});