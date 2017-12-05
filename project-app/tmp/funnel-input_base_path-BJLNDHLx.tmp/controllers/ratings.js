import Ember from 'ember';

export default Ember.Controller.extend({




   sortAscending: false,
   sortProperties: ['votes', 'title'],
 actions: {



 addMovie: function () {

    var num =0;
     var title = this.get('title');
     if (title !== '') {
       var newTitle = this.store.createRecord('ratings', {
         title: title,
         votes: 1,
        idNum : num++,
         });
       newTitle.save();
     }

   },

   updateVotes: function(ratings, number) {
   var votes = ratings.get('votes');
   ratings.set('votes', votes + number);
   ratings.save();
  },

   up: function () {
     //this.store.findRecord('ratings', id).then(function(ratings){\
     var votes = this.store.getElementsByClassName('votes');
     votes.incrementProperty('votes');
     votes.save();




     //})
   },
   down: function () {
     this.store.updateVotes(this.store.get('model'), -1);
   },




   remove: function (rating) {
     var todo = this.get('model');
     rating.deleteRecord();
     rating.save();
   }
 }


});
