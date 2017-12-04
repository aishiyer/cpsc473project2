define('project-app/torii-adapters/application', ['exports', 'emberfire/torii-adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({
    firebase: Ember.inject.service()
  });
});