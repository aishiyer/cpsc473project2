define('project-app/controllers/movies', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			deleteMovie: function deleteMovie(id) {
				this.store.findRecord('movie', id).then(function (movie) {
					movie.deleteRecord();

					movie.save();
				});
			}
		}
	});
});