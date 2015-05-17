import DS from 'ember-data';

var Framework= DS.Model.extend({
  name           : DS.attr(),
  description    : DS.attr(),
  source         : DS.attr(),
  initialRelease : DS.attr(),
  liscence       : DS.attr(),
  slug: Ember.computed('name',{
    get: function () {
      return this.get('name').replace(/\s+/g, '-').toLowerCase();
    }
  })
});

Framework.reopenClass({
	
  FIXTURES : [
		  {
	  	id: 1,
	  	name: "AngularJS" , 
	  	description: "In software development, AngularJS (commonly referred to as 'Angular') is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) architecture, along with components commonly used in rich Internet applications." ,
	 		source: "https://github.com/angular/angular.js",
	 		initialRelease: "2009",
	 		liscence: "MIT Liscence"
	 	},
	  {
	  	id: 2,
	  	name: "Backbone.js" , 
	  	description: "Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm. Backbone is known for being lightweight, as its only dependency is on one JavaScript library, Underscore.js. It is designed for developing single-page web applications, and for keeping various parts of web applications (e.g. multiple clients and the server) synchronized.[4] Backbone was created by Jeremy Ashkenas, who is also known for CoffeeScript." ,
	 		source: "https://github.com/jashkenas/backbone",
	 		initialRelease: "October 13, 2010",
	 		liscence: "MIT Liscence"
	 	},
	 	{
	  	id: 3,
	  	name: "Ember.js" , 
	  	description: "Ember.js is an open-source client-side JavaScript web application framework based on the model-view-controller (MVC) software architectural pattern. It allows developers to create scalable single-page applications by incorporating common idioms and best practices into a framework that provides a rich object model, declarative two-way data binding, computed properties, automatically-updating templates powered by its own template library, HTMLBars, built on top of Handlebars.js, and a router for managing application state." ,
	 		source: "https://github.com/emberjs/ember.js",
	 		initialRelease: "2011",
	 		liscence: "MIT Liscence"
	 	},
	 		{
	  	id: 4,
	  	name: "Knockout.js" , 
	  	description: "Knockout is a standalone JavaScript implementation of the Model-View-ViewModel pattern with templates. The underlying principles are: a clear separation between domain data, view components and data to be displayed; the presence of a clearly defined layer of specialized code to manage the relationships between the view components." ,
	 		source: "https://github.com/knockout/knockout",
	 		initialRelease: "July 5, 2010",
	 		liscence: "MIT Liscence"
	 	}
  ]

});
 
export default Framework;
