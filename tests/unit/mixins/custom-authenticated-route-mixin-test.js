import EmberObject from '@ember/object';
import CustomAuthenticatedRouteMixinMixin from 'quin-frontend/mixins/custom-authenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | CustomAuthenticatedRouteMixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CustomAuthenticatedRouteMixinObject = EmberObject.extend(CustomAuthenticatedRouteMixinMixin);
    let subject = CustomAuthenticatedRouteMixinObject.create();
    assert.ok(subject);
  });
});
