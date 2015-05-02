import Ember from 'ember';
export default Ember.Route.extend({
  title: function(tokens) {
  	if (tokens.length > 0) {
  		return tokens.join(' | ') + ' - BitsOcean';
  	}else{
  		return 'BitsOcean';
  	}
    
  }
});