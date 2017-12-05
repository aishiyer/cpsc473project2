define('project-app/controllers/movies/edit', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			editMovie: function editMovie(id) {
				var self = this;

				var title = this.get('model.title');
				var description = this.get('model.description');
				var rating = this.get('model.rating');

				//Update Task
				this.store.findRecord('task', id).then(function (movie) {
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
});