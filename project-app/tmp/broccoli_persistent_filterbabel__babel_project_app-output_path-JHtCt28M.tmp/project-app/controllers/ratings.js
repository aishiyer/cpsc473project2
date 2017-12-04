define('project-app/controllers/ratings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    sortAscending: false,
    sortProperties: ['votes', 'title'],
    actions: {

      addMovie: function addMovie() {

        var num = 0;
        var title = this.get('title');
        if (title !== '') {
          var newTitle = this.store.createRecord('ratings', {
            title: title,
            votes: 1,
            idNum: num++
          });
          newTitle.save();
        }
      },

      updateVotes: function updateVotes(ratings, number) {
        var votes = ratings.get('votes');
        ratings.set('votes', votes + number);
        ratings.save();
      },

      up: function up() {
        this.store.updateVotes(this.store.get('model'), 1);
      },
      down: function down() {
        this.store.updateVotes(this.store.get('model'), -1);
      },

      remove: function remove(id) {
        var ratings = this.store.findRecord('ratings', id);
        ratings.deleteRecord();
        ratings.save();
      }
    }

  });
});