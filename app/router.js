import EmberRouter from '@ember/routing/router';
import config from 'survey-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('signin', { path: '/' });
  this.route('signup', { path: '/signup' });
  this.route('user', { path: '/user' });
  this.route('admin', { path: '/admin' });
  this.route('user-detail', { path: '/user-detail/:id' });
  this.route('create-survey', { path: '/create-survey' });
  this.route('survey-list', { path: '/survey-list' });
});
