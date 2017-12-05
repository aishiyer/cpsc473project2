define('project-app/controllers/sign-up', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    firebaseApp: Ember.inject.service(),

    actions: {
      signUp: function signUp() {
        var _this = this;

        var auth = this.get('firebaseApp').auth();
        var controller = this;
        auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).then(function (userResponse) {
          var user = _this.store.createRecord('user', {
            id: userResponse.uid,
            email: userResponse.email
          });
          return user.save().then(function () {
            this.transitionTo('application');
          }.bind(_this));
        });
      }
    }
  });
});