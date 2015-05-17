/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix : 'frontend-bitsocean',
    environment  : environment,
    baseURL      : '/',
    locationType : 'auto',
    contentSecurityPolicy: {
      'script-src'  : "'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com",
      'img-src'     : "'self' ",
      'font-src'    : "'self'  https://fonts.gstatic.com",
      'style-src'   : "'self' 'unsafe-inline' fonts.googleapis.com hello.myfonts.net",
      'connect-src' : "'self' http://api.bitsocean.com",
      'media-src': "'self'",
      'frame-src': "'self' www.google.com" 
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ember-htmlbars': true
      },
      backend: 'http://api.bitsocean.com'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.googleAnalyticsId = 'UA-xxxxxxxx-1'
    ENV.RAISE_ON_DEPRECATION = true;
    ENV.ACTIVE_MODEL_API_URL = 'http://api.bitsocean.com';
    ENV.contentSecurityPolicy['script-src'] +=  " localhost:35729 0.0.0.0:35729";
    ENV.contentSecurityPolicy['connect-src'] += " localhost:3000 0.0.0.0:35729 ";
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalyticsId = 'UA-56285658-3'
  }

  return ENV;
};
