define('project-app/controllers/sign-in', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      signIn: function signIn() {
        var controller = this.get('controller');
        //var email = controller.get('email');
        //var password = controller.get('password');
        this.get('session').open('firebase', {
          provider: 'password',
          email: this.get('email') || '',
          password: this.get('password') || ''
        }).then(function () {
          this.transitionToRoute('application');
        }.bind(this));
      }
    }
  });
});