import DS from 'ember-data';
export default DS.ActiveModelAdapter.extend({
	host: EmberENV.backend,
 	namespace: 'api'
});