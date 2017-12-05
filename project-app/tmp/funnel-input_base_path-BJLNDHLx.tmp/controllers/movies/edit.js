import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editMovie: function(id){
			var self = this;

			var title = this.get('model.title');
			var description = this.get('model.description');
			var rating = this.get('model.rating');

			//Update Task
			this.store.findRecord('task', id).then(function(movie){
				movie.set('title', title);
				movie.set('description', description);
				movie.set('rating', rating);

				// Save to Database
        movie.save();

				self.transitionTo('movies');

			});
		}
	}
});
