// Your code here
const chai = require("chai");
const { expect } = chai;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap(array, callback)", () => {
    let array;
    let callback;

    beforeEach(() => {
        array = [1, 2, 3];
        callback = element => element * 2;
    });

    it("should not mutate the array", () => {
        myMap(array, element => element * 2);
        expect(array).to.eql([1, 2, 3]);
    });

    it("should not call built-in Array map method", () => {
        chai.spy.on(array, "map", () => expect.fail("Array.prototype.map() should not be called"));
        myMap(array, element => element * 2);
    });

    it("should execute the calback for each element of the array", () =>{
        const spy = chai.spy(callback);
        const result = myMap(array, spy);
        expect(spy).to.have.been.called.exactly(3);
        expect(result).to.eql([2, 4, 6]);
    });
})
