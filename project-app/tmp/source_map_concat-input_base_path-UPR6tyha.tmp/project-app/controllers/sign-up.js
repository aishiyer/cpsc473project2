define('project-app/controllers/sign-up', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Ember.Controller.extend({
    firebase: Ember.inject.service(),
    actions: {
      signUp: function signUp() {
        var controller = this;
        this.get('firebase').createUser({
          email: this.get('email') || '',
          password: this.get('password') || ''
        }, function (error, data) {
          if (error) {
            console.log(error);
          } else {
            controller.set('email', null);
            controller.set('password', null);
          }
        });
      }
    }
  });
});