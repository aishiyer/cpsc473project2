define('project-app/controllers/messages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sortProperties: ['timestamp'],

    // // sorts post by timestamp
    sortAscending: false,
    actions: {
      addMessage: function addMessage() {

        var name = this.get('name');
        var body = this.get('body');
        if (name == '' || body == '') {

          alert("Please fill out the field before submitting");
        } else {

          var newMessage = this.store.createRecord('messages', {
            name: name,
            body: body,
            timestamp: new Date().getTime()

          });
          newMessage.save();

          //clear form
          this.setProperties({
            name: '',
            body: '',
            timestamp: ''
          });
        }
        //save to database

      }
    }

  });
});