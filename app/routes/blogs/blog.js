import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		 return this.modelFor('blogs').findBy('id', params.blog_id);
	}
});
