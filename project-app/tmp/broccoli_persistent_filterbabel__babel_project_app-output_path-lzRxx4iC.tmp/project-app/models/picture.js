define('project-app/models/picture', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr(),
    description: _emberData.default.attr(),
    image: _emberData.default.attr()
  });
});