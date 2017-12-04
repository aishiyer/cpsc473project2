define('project-app/controllers/pictures', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Ember.Controller.extend({
    actions: {
      deletePicture: function deletePicture(picture) {
        picture.deleteRecord();
        picture.save();
      }
    }
  });
});