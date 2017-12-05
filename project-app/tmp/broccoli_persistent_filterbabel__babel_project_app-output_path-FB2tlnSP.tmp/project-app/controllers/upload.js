define('project-app/controllers/upload', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Contollers.extend({
		firebaseApp: Ember.inject.service(),
		actions: {
			uploadImage: function uploadImage(file) {
				var storageRef = firebase.storage().ref();
				var imageRef = storageRef.child('dog.jpg');
				var imageSRef = storageRef.child('images/dog.jpg');

				var file = $('imageSRef')[0].files[0];
				ref.put(file).then(function (snapshot) {
					console.log('Uploaded an image!');
				});

				var metadata = {
					contentType: 'image/jpeg'
				};

				var uploadTask = storageRef.child('images/dog.jpg').put(file, metadata);
				uploadTask.on('state_changed', function (snapshot) {
					var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED:
							// or 'paused'
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING:
							// or 'running'
							console.log('Upload is running');
							break;
					}
				}, function (error) {}, function () {
					var downloadURL = uploadTask.snapshot.metadata.downloadURL;
				});
			}
		}
	});
});