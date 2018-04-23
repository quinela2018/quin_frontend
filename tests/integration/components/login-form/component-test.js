import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('login', function() {});
    await render(hbs`{{login-form onLogin=login}}`);

    assert.equal(this.element.querySelector("label[id='identification']").textContent.trim(), 'Login');
    assert.equal(this.element.querySelector("label[id='password']").textContent.trim(), 'Password');
  });
});
