import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | deez knux', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Hello, world!');

    assert.dom('[data-test-nav-about]').hasText('About Us');
    await click('[data-test-nav-about]');

    assert.equal(currentURL(), '/about');  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h2').hasText('About Deez Knux');

    assert.dom('[data-test-nav-home]').hasText('Home');
    await click('[data-test-nav-home]');

    assert.equal(currentURL(), '/');
  });
});
