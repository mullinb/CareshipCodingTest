var expect = require('chai').expect
const atm = require('../../models/atm.js');

describe('atm', () => {
  describe('handles valid input correctly', () => {

    var validResult;
    beforeEach(() => {
      validResult = atm('1080');
    });

    it('should return an array of values when passed a valid integer string', () => {
      expect(Array.isArray(validResult))
        .to.be.true;
    });

    it('should return an array of minimum possible length', () => {
      expect(validResult.filter(note => note == '50.00').length)
        .to.be.below(2);
      expect(validResult.filter(note => note == '20.00').length)
        .to.be.below(3);
      expect(validResult.filter(note => note == '10.00').length)
        .to.be.below(2);
    });

    it('should return an array with values in decreasing order', () => {
      expect(validResult)
        .to.deep.equal(validResult.sort((a, b) => {
          return b - a;
        }));
    });
  });

  describe('handles special valid input cases correctly', () => {
    it('should not timeout on a very large withdrawal requests', () => {
      expect(Array.isArray(atm('1080010100124194012043124091240394543958032459302453284953240')))
        .to.be.true;
    });

    it('should return an empty array when passed a NULL value', () => {
      expect((atm(null)))
        .to.deep.equal([]);
    });
  });

  describe('handles invalid input cases correctly', () => {
    it('should throw an InvalidArgumentException when passed a negative integer string', () => {
      expect(() => atm('-1080'))
        .to.throw(Error, "InvalidArgumentException");
    });

    it('should throw an InvalidArgumentException when passed an argument which is not an integer string', () => {
      expect(() => atm('-10a80'))
      .to.throw(Error, "InvalidArgumentException");
    });

    it('should throw a NoteUnavailableException when passed an integer string not divisible by some combination of available notes', () => {
      expect(() => atm('1085'))
        .to.throw(Error, "NoteUnavailableException");
    });
  });
});
