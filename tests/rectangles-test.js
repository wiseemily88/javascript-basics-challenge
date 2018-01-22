assert = require('chai').assert;
const myFunctions = require('../lib/rectangles')
describe ("rectangle properties", function() {

  it("the area function returns area", function(){
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.area(rectangle), 200)

  })

  it("the perimeter function returns perimeter", function(){
    var rectangle = {width: 10, height: 20}
    assert.strictEqual(myFunctions.perimeter(rectangle), 60)
  })
})
