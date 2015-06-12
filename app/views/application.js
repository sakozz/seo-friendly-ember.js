import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function () {
		this.sideNav();
	},

	sideNav: function() {
		Ember.$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left' // Choose the horizontal origin
    });
  }
});
