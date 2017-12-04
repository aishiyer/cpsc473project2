define('project-app/models/ratings', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    votes: _emberData.default.attr('number'),
    idNum: _emberData.default.attr('number')
  });
});