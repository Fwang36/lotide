const assert = require('chai').assert
const middle = require('../middle')

describe("#middle", () => {

  it("should return [4] when given [3,4,5]", () => {
    assert.deepEqual(middle([3,4,5]), [4]);
  });

  it("should return [4,5] when given [3,4,5,6]", () => {
    assert.deepEqual(middle([3,4,5,6]), [4,5]);
  });

});

