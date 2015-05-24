import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title     : DS.attr(),
  body      : DS.attr(),
  user      : DS.attr(),
  createdAt : DS.attr(),
  slug: Ember.computed('title',{
    get: function () {
      return this.get('title').toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    }
  }),

  metaDescription: Ember.computed('body',{
    get: function () {
     return this.get('body').substr(0, 20) + "...";
    }
  })
});
