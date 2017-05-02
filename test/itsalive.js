
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

describe("It's Alive", function(){
  it("Logs text and pillages towns", function(){});
  it('Knows how to add', function(){
    expect(2 + 2 === 4).to.equal(true);
    expect(2+2).to.equal(4);
  });
  it('Knows how to wait', function(done){
    var startTime = new Date();
    setTimeout(function(){
      var endTime = new Date();
      var duration = endTime - startTime;
      expect(duration).to.be.closeTo(1000, 100);
      done();
    }, 1000);
  });
  it('Can spy on arrays', function(){
    var arr = [1, 2, 3, 4, 5];
    // chai.spy.on(arr, 'forEach');
    var testFunc = function(el){};
    testFunc = chai.spy(testFunc);
    arr.forEach(testFunc);
    expect(testFunc).to.have.been.called.exactly(5);
  })
  // it('Can spy on arrays', function(){
  //   var arr = [1, 2, 3, 4, 5];
  //
  //   var spyObj = {
  //     testFunc: function(el){}
  //   }
  //   chai.spy.on(spyObj, 'testFunc');
  //   // chai.spy.on(arr, 'forEach');
  //
  //   // var spy = chai.spy(testFunc);
  //   arr.forEach(spyObj.testFunc);
  //   expect(spyObj.testFunc).to.have.been.called.exactly(5);
  // })
});
