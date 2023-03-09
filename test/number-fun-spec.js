// Your code here
const {expect} = require('chai')
const functions = require('../problems/number-fun')

const returnsThree = functions.returnsThree
const reciprocal = functions.reciprocal

describe('returnsThree function', function() {
    it('should return the number 3', function() {
        let three = returnsThree()
        expect(three).to.equal(3)
    })
})

describe('reciprocal function', function() {
    it('should return the reciprocal of a number (1/number)', function() {
        expect(reciprocal(4)).to.equal(1/4)
        expect(reciprocal(50)).to.equal(1/50)
        expect(reciprocal(10000)).to.equal(1/10000)
    })

    it('should only take numbers between 1 and 1,000,000', function() {
        expect(reciprocal(10)).to.equal(1/10)
        expect(() => reciprocal(0)).to.throw(RangeError)
    })
})