import c = require('./../js/cell');

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('cell', function() {
  var cell = new c.Cell();
  it('empty cell', function() {
    assert.equal(1,1);
  });
});

