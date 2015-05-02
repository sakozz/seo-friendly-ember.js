import Ember from 'ember';
import RouteMetaMixin from '../../mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin,{
	meta: {},
	
	model: function (params) {
		return this.modelFor('blogs').findBy('slug', params.blog_slug);
  },
  
  serialize: function(model){
    return {blog_slug: model.get('slug')};
  },

  titleToken: function  (model) {
  	return model.get('title');
  },

  afterModel: function(model) {
  	this.setMetaTags(model);
  },

  setMetaTags: function (model) {
  	var metaTags = {
      'property': {
        'og:name'  : model.get('title') +' - BitsOcean',
        'og:image' : 'http://i.imgur.com/ilmbIHl.png'
      },
      'name': {
        'description' : model.get('metaDescription'),
        'keywords'    : model.get('title')
      }
    };
    this.set('meta', metaTags);
  }

});
