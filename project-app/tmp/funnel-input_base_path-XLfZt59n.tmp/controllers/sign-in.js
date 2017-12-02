import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn: function() {
        var controller = this.get('controller');
      //var email = controller.get('email');
      //var password = controller.get('password');
          this.get('session').open('firebase', {
               provider: 'password',
               email: this.get('email') || '',
               password: this.get('password') || ''
          }).then(function() {
              this.transitionToRoute('application');
          }.bind(this));
      }
    }
  });
