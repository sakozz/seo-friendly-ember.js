import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.resource('pages',{path: '/'});
    this.resource('frameworks',function(){
    	this.route('framework',{path: '/:framework_slug'});
    });

    this.resource('blogs', function () {
        this.route('blog',{path: '/:blog_slug'});
    });
});
