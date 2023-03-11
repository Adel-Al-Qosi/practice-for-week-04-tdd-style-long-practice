// Your code here
const { expect } = require("chai");
const chai = require('chai')
const myMap = require("../problems/my-map");
const spies = require('chai-spies')
chai.use(spies)

describe("myMap function", function() {
    let array;
    let callback;

    beforeEach(() => {
        array = [1, 2, 3, 4, 5]
        callback = function(n) {
            return n * 2
        }
    })

    afterEach(() => {
        array = null
        callback = null
    })

    it('should not mutate the passed-in array', function() {
        let result = myMap(array, callback)
        
        expect(result).to.deep.equal([2, 4, 6, 8, 10])
        expect(array).to.deep.equal([1, 2, 3, 4, 5])
    })

    it.only('should not call the built-in Array.map', function() {
        let spy = chai.spy.on(Array.prototype, 'map')
        myMap(array, callback)
        expect(spy).to.not.have.been.called()
    })

    it('should call the passed-in callback on each element of the passed-in array', function() {
        let callbackSpy = chai.spy(callback)
        myMap(array, callbackSpy)
        expect(callbackSpy).to.have.been.called.exactly(array.length)
    })
});
