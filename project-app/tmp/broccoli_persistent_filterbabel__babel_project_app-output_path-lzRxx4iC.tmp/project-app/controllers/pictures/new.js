define('project-app/controllers/pictures/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      publishPictures: function publishPictures() {
        var newPicture = this.store.createRecord('picture', {
          title: this.get('title'),
          description: this.get('desc')
        });
        newPicture.save();
        this.transitionTo('pictures');
      }
    }
  });
});