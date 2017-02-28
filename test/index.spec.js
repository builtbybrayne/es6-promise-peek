'use strict';
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
require("sinon-as-promised");
chai.use(require('chai-as-promised'));
chai.use(require("sinon-chai"));


require("../index");

describe('ES6 Promise Peek', function(){
  
  it('should throw an exception if called on a null object', () => {
    expect(() => Promise.prototype.peek.call(null, ()=>{})).to.throw(Error);
  });

  it('should throw an exception if called on a non-promise object', () => {
    expect(() => Promise.prototype.peek.call({}, ()=>{})).to.throw(Error);
  });

  it('should throw an exception if called without a function', () => {
    expect(() => Promise.resolve("x").peek()).to.throw(Error);
  });
  
  it("should allow a transparent peek of a promise chain", () => {
    const peek = sinon.stub();
    const then = sinon.stub();
    return Promise.resolve("a")
      .peek(peek)
      .then(then)
      .then(() => {
        expect(peek).to.have.been.calledWith("a");
        expect(then).to.have.been.calledWith("a");
      });
  });
});
