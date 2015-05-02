import DS from 'ember-data';

export default DS.Model.extend({
  title     : DS.attr(),
  body      : DS.attr(),
  user      : DS.attr(),
  createdAt : DS.attr(),
  slug: function() {
    return this.get('title').replace(/\s+/g, '-').toLowerCase();
  }.property('title'),

  metaDescription: function () {
  	return this.get('body').substr(0, 20) + "...";
  }.property('body')


});
