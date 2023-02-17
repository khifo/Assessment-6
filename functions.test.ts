const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    it('should contain all the same items as the input array', () => {
      const input = [1, 2, 3, 4, 5];
      const output = shuffleArray(input);
      input.sort();
      output.sort();
      expect(output).toEqual(input);
    });
    it('should return an array', () => {
        const input = [1, 2, 3, 4, 5];
        const output = shuffleArray(input);
    
        expect(Array.isArray(output)).toBe(true);
      });
  });

  
  