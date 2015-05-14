import Ember from 'ember';
import RouteMetaMixin from '../mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin,{
   meta: function() {
    return {
      'property': {
        'og:name': 'BitsOcean',
        'og:image': 'http://i.imgur.com/ilmbIHl.png'
      },
      'name': {
        'description' : "BitsOcean description",
        'keywords' : "Bitsocean, emberjs, SEO"
      }
    };
  }
});