const assert = require('chai').assert
const tail = require('../tail')


describe("#tail", () => {

  it("should return [2,10] when given [0,2,10", () => {
    assert.deepEqual(tail([0,2,10]), [2,10]);
  });

  it("should return empty when given [1]", () => {
    assert.deepEqual(tail([1]), []);
  })

});
