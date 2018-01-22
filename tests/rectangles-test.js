assert = require('chai').assert;
const area = require('../lib/rectangles')
describe ("rectangle properties", function() {

  it("the area function returns area", function(){
    var rectangle = {width: 10, height: 20}

    assert.strictEqual(area(rectangle), 200)

  })
})
