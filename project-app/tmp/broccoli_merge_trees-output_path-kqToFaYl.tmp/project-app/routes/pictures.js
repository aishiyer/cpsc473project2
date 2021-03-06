define('project-app/routes/pictures', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.find('picture', {
        orderBy: 'title'
      });
    }
  });
});