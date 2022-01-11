import EmberRouter from '@ember/routing/router';
import config from 'deez-knux/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('top-rated');
  this.route('account');
  this.route('saved-knux');
  this.route('login');
});
