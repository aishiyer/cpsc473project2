import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    publishPictures: function() {
      var newPicture = this.store.createRecord('picture', {
        title: this.get('title'),
        description: this.get('desc'),
      });
      newPicture.save();
      this.transitionTo('pictures');
    },
  },
});
