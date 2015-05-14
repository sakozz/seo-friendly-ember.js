import Ember from 'ember';
import RouteMetaMixin from '../../../mixins/route-meta';
import { module, test } from 'qunit';

module('RouteMetaMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouteMetaObject = Ember.Object.extend(RouteMetaMixin);
  var subject = RouteMetaObject.create();
  assert.ok(subject);
});
