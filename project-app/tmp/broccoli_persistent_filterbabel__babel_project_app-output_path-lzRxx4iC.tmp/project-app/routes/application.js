define('project-app/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        actions: {
            login: function login() {
                var controller = this.get('controller');
                var email = controller.get('userEmail');
                var password = controller.get('userPassword');
                this.get('session').open('firebase', {
                    provider: 'password',
                    email: email,
                    password: password
                }).then(function () {
                    this.transitionTo('protected');
                }.bind(this));
            },
            logout: function logout() {
                this.get('session').close().then(function () {
                    this.transitionTo('application');
                }.bind(this));
            }
        }
    });
});