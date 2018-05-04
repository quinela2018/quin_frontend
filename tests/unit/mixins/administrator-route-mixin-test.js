import EmberObject from '@ember/object';
import AdministratorRouteMixinMixin from 'quin-frontend/mixins/administrator-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | AdministratorRouteMixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let AdministratorRouteMixinObject = EmberObject.extend(AdministratorRouteMixinMixin);
    let subject = AdministratorRouteMixinObject.create();
    assert.ok(subject);
  });
});
