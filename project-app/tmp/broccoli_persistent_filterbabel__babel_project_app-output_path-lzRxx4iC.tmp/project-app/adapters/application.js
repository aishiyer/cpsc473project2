define('project-app/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var inject = Ember.inject;
  exports.default = _firebase.default.extend({
    firebase: inject.service()
  });
});