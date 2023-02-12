// Your code here
const { expect } = require('chai');

const reverseString = require('../problems/reverse-string');


describe('Reverse String Function', function() {
    
    it('should return a reversed string', function() {
        expect(reverseString("fun")).to.equal("nuf");
    });

    it('should return an error when not a string', function() {
        expect(() => reverseString(42)).to.throw(TypeError, "Expected to be a string");
    })
})
