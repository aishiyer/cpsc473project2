define('project-app/models/movie', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    description: _emberData.default.attr('string'),
    rating: _emberData.default.attr('number'),
    created: _emberData.default.attr('string', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    })
  });
});