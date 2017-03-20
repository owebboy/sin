var sin = require('./index');
var assert = require('assert');
describe('sin', function() {
  it('0 radians should return 0', function() {
    assert.equal(0, sin(0))
  })
  it('2pi radians should return 0', function() {
    assert.equal(0, sin(2*Math.PI))
  })
  it('pi/2 radians should return 1', function() {
    assert.equal(1, sin(Math.PI/2))
  })
  it('180 degrees should return 0', function() {
    assert.equal(0, sin(180, 'deg'))
  })
});
