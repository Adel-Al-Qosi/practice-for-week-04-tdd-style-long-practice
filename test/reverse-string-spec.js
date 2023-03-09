// Your code here
const {expect} = require('chai')
const reverseString = require('../problems/reverse-string')


describe('reverseString function', function() {
    it('should return nuf from the string fun', function() {
        expect(reverseString('fun')).to.equal('nuf')
    })

    it('should throw a TypeError if the given input is not a string', function() {
        expect(() => reverseString(10).to.throw(TypeError))
    })
})