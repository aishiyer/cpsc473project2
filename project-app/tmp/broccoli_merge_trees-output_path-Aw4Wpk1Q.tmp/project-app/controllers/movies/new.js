import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addMovie: function(){
			var title = this.get('title');
			var description = this.get('description');
			var rating = this.get('rating');

			//Create New Task
			var newMovie = this.store.createRecord('movie', {
				title: title,
				description: description,
				rating:rating,
			});

			// Save to Database
			newMovie.save();

			// Clear Form
			this.setProperties({
				title: '',
				description: '',
				rating: ''
			});
		}
	}
});
