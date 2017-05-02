
const chai = require('chai');
const expect = chai.expect;

describe("It's Alive", function(){
  it("Logs text and pillages towns", function(){});
  it('Knows how to add', function(){
    expect(2 + 2 === 4).to.equal(true);
    expect(2+2).to.equal(4);
  });
  it('Knows how to wait', function(done){
    var startTime = new Date().getMilliseconds();
    setTimeout(function(){
      var endTime = new Date().getMilliseconds();
      expect(startTime - endTime <= 1100).to.equal(true);
      done();
    }, 1000);
  });
});
