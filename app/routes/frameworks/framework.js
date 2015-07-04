import Ember from 'ember';

import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

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

  meta: function () {
    var model = this.get('currentModel');
    var metaDescription = model.get('description').substring(0,150)+ '...';
  	return {
      'property': {
        'og:name'  : model.get('name') +' - BitsOcean',
        'og:image' : model.get('logoUrl'),
        'og:url'  : document.location.href,
        'og:description' : metaDescription
      },
      'name': {
        'description' : metaDescription,
        'keywords'    : model.get('name')
      }
    };
  },

  actions: {
    didTransition: function() {
      this._super.apply(this, arguments);
      this.controllerFor('application').set('navTitle', this.get('currentModel.name'));
      return true; // Bubble the didTransition event
    }
  }
  
});
