import Controller from '@ember/controller';

export default Ember.Controller.extend({
  actions: {
  deletePicture(picture) {
    picture.deleteRecord();
    picture.save();
  },
},
});
