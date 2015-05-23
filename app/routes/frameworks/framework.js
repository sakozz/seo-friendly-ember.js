import Ember from 'ember';

import RouteMetaMixin from '../../mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin,{
	
	model: function (params) {
		return this.modelFor('frameworks').findBy('slug', params.framework_slug);
  },
  
  serialize: function(model){
    return {framework_slug: model.get('slug')};
  },

  titleToken: function  (model) {
    return model.get('name');
  },

  metaTags: {},

  afterModel: function(model) {
  	this.setMetaTags(model);
  },

  setMetaTags: function (model) {
    var metaDescription = model.get('description').substring(0,150)+ '...';
  	var metaTags = {
      'property': {
        'og:name'  : model.get('name') +' - BitsOcean',
        'og:image' : 'http://i.imgur.com/ilmbIHl.png',
        'og:url'  : document.location.href,
        'og:description' : metaDescription
      },
      'name': {
        'description' : metaDescription,
        'keywords'    : model.get('name')
      }
    };
    this.set('meta', metaTags);
  }
  
});
