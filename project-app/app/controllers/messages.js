import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    addMessage: function() {

      var name = this.get('name');
      var body = this.get('body');
      var newMessage = this.store.createRecord('messages', {
        name:name,
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