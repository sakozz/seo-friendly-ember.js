import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function (params) {
		return this.modelFor('frameworks').findBy('slug', params.framework_slug);
  },
  
  serialize: function(model){
    return {framework_slug: model.get('slug')};
  }
  
});
