define('project-app/routes/protected', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      console.log(this.get('session'));
      if (!this.get('session.isAuthenticated')) {
        this.transitionTo('application');
      }
    }
  });
});