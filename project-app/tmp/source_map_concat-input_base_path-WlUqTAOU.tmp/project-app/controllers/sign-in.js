define('project-app/controllers/sign-in', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Ember.Controller.extend({
    actions: {
      signIn: function signIn(provider) {
        var controller = this;
        this.get('session').open('firebase', {
          provider: provider,
          email: this.get('email') || '',
          password: this.get('password') || ''
        }).then(function () {
          controller.set('email', null);
          controller.set('password', null);
        }, function (error) {
          console.log(error);
        });
      }
    }
  });
});