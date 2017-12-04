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
     this.store.updateVotes(this.store.get('model'), 1);
   },
   down: function () {
     this.store.updateVotes(this.store.get('model'), -1);
   },




   remove: function (id) {
     var ratings = this.store.findRecord('ratings', id);
     ratings.deleteRecord();
     ratings.save();
   }
 }


});
