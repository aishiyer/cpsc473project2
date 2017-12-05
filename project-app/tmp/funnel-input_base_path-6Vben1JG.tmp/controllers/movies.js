import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteMovie: function(id){
			this.store.findRecord('movie', id).then(function(movie){
				movie.deleteRecord();

				movie.save();
			});
		}
	}
});
