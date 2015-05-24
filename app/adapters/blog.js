import DS from 'ember-data';
import Config from '../../config/environment';
export default DS.ActiveModelAdapter.extend({
	host: Config.EmberENV.backend,
 	namespace: 'api'
});