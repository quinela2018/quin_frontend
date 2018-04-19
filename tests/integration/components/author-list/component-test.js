import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | author-list', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    const authorList = server.createList('author', 10);
    this.set('authorList', authorList);
    await render(hbs`{{author-list authors=authorList}}`);

    assert.equal(this.element.querySelector('h2').textContent.trim(), 'List of authors');
    assert.equal(this.element.querySelectorAll('li').length, 10);
  });
});
