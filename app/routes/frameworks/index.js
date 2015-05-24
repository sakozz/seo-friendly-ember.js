import Ember from 'ember';

import RouteMetaMixin from '../../mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin,{
	
	model: function () {
		return {
			title: 'Front-end frameworks',
			metaDescription: 'The Landscape of front-end web development consists of so many libraries, tools, and frameworks that it has become very difficult for anyone to keep up with everything. Developers these days are spoiled with choice when it comes to selecting MV* framework for structuring and organizing their JavaScript web apps. If one does a quick Google search for “JavaScript MVC Frameworks”, it is really easy to become overwhelmed with all the choices that one can choose from. In order to solve this problem, a project “TodoMVC” is available in the Internet which offers the same To-do application implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today.',
			description: 'Front-end frameworks are meant to support the client-side presentation and maintain the front-end related codes simple and organized. The term “Front-end frameworks” may refer to design oriented frameworks such as bootstrap, foundation, semantic UI etc. as well as the same term could meant the full-fledged JavaScript frameworks like Angular.js, Ember.js etc.  Design oriented frameworks like bootstrap provide easy and more standards-complaint web-design along with different tool and modules like reset-stylesheet, grid and responsive web-design, styling for forms, buttons and navigation menus etc. (Wikipedia, 2015). On the other hand, full-fledged JavaScript frameworks are meant to handle JavaScript related interactivity in application by keeping them structured and organized. Most of the famous JavaScript frameworks follow the MVC pattern, which isolates the data model, user interface and business logic into different layers as Model-View-Controller. This makes the MVC pattern capable of controlling user requests and handle interaction to servers more intelligently and logically.'
		};
  },

  metaTags: {},
  afterModel: function(model) {
  	this.setMetaTags(model);
  },

  setMetaTags: function (model) {
  	var metaDescription = model.metaDescription.substring(0,150)+ '...';
  	var metaTags = {
      'property': {
        'og:name'  : model.title +' - BitsOcean',
        'og:url'	: document.location.href,
        'og:image' : 'http://i.imgur.com/ilmbIHl.png',
        'og:description' : metaDescription
      },
      'name': {
        'description' : metaDescription,
        'keywords'    : model.title
      }
    };

    this.set('meta', metaTags);
  },

  actions: {
    didTransition: function() {
      this.controllerFor('application').set('navTitle', "Front-end JavaScript Frameworks");
      return true; // Bubble the didTransition event
    }
  }
  
});
