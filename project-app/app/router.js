import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('messages');
  this.route('pictures', function() {
    this.route('new');
  });
  this.route('sign-up');
  this.route('sign-in');
  this.route('protected');
  this.route('contact');
  this.route('ratings');
});

export default Router;
