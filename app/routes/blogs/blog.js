import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return this.modelFor('blogs').findBy('slug', params.blog_slug);
  },
  
  serialize: function(model){
    return {blog_slug: model.get('slug')};
  },

  titleToken: function  (model) {
  	return model.get('title');
  }
});
