import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('messages');
  this.route('pictures');
  this.route('sign-up');
  this.route('sign-in');
  this.route('protected');
});

export default Router;
