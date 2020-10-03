import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Navbar />`);

    assert.dom('[data-test-nav-about]').hasText('About Us');
    assert.dom('[data-test-nav-home]').hasText('Home');

  });
});
