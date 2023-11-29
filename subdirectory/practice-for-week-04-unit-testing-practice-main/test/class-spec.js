const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  
  let word;
  beforeEach(() => (word =  new Word("hello")));

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
      // expect.fail("replace with your code");
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("hello");
      // expect.fail("replace with your code");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("hll");
      // expect.fail("replace with your code");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("eo");
      // expect.fail("replace with your code");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      // Word begins with consonant
      expect(word.pigLatin()).to.equal("ellohay");
      
      // Word begins with vowel
      word = new Word("apple");
      expect(word.pigLatin()).to.equal("appleyay");
      
      // expect.fail("replace with your code");
    });
  });


});
