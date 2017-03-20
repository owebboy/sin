var sin = require('./index');
var assert = require('assert');
describe('sin', function() {
  it('should return 0', function() {
    assert.equal(0, sin(0));
  });
});
