import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authors/author/books/book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:authors/author/books/book');
    assert.ok(route);
  });
});
