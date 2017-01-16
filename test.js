QUnit = require('qunit-cli');
require('./index.js');

// QUnit.test(name, testFunction)
QUnit.test('makeBoard', function(assert) {
  expect('array');
  assert.notPropEqual(makeBoard(), array, 'Should be an array');
});
