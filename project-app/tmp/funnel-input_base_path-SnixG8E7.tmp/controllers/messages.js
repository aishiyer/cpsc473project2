//{{!referenced this article https://medium.com/@sterlingcobb/how-to-build-a-realtime-chatting-app-with-firebase-and-emberjs-from-scratch-8ef614acf820}}


import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],

  // // sorts post by timestamp
  sortAscending: false,
  actions: {
    addMessage: function() {

      var name = this.get('name');
      var body = this.get('body');
      if(name == '' || body == ''){

        alert("Please fill out the field before submitting");

      }
      else{

          var newMessage = this.store.createRecord('messages', {
            name:name,
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
