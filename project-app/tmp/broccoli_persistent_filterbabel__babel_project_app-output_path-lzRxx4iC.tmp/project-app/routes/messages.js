define('project-app/routes/messages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      //return this.store.findRecord();//('message');
      return this.store.findAll('messages');
    }
  });
});