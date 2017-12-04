define('project-app/controllers/messages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: false, // sorts post by timestamp
    actions: {
      addMessage: function addMessage() {

        var name = this.get('name');
        var body = this.get('body');
        var newMessage = this.store.createRecord('messages', {
          name: name,
          body: body,
          timestamp: new Date().getTime()

        });
        //save to database
        newMessage.save();

        //clear form
        this.setProperties({
          name: '',
          body: '',
          timestamp: ''
        });
      }
    }

  });
});