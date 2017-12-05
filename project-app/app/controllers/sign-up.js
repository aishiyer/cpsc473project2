import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),

  actions: {
    signUp() {
      const auth = this.get('firebaseApp').auth();
      let controller = this;
      auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).
         then((userResponse) => {
        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email
        });
        return user.save()
        .then(function() {
            this.transitionTo('application');
        }.bind(this));
      });
    }
  }
});
