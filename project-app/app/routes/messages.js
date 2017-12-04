// refererenced this https://medium.com/@sterlingcobb/how-to-build-a-realtime-chatting-app-with-firebase-and-emberjs-from-scratch-8ef614acf820}}

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return this.store.findRecord();//('message');
    return this.store.findAll('messages');
  }
});
