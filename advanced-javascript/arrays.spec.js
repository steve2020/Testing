const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should call cb on each element of array', () => {
      const map = arrayFunctions.map;
      const addOne = (x) => x + 1;
      expect(map([1, 2], addOne)).toEqual([2, 3]);
    });
  });

  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
    it('iterates over array elem and corresponding index', () => {
      const each = arrayFunctions.each;
      const printFunc = (value, index) => console.log(value + ': ' + index);
      expect(each([52, 73], printFunc).toBe('52: 0'));
    })
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.each;
      expect(typeof reduce).toBe('function');
    }); 
  });

  describe('find', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(typeof find).toBe('function');
    }); 
    it('should find first element that satisfy conditions set in callback function', () => {
      expect(find([1, 2, 3], num => num > 2)).toBeDefined();
      expect(find([1, 2, 3, 4], num => num > 2)).toBe(3);
    }); 
    it('should return undefined if no elements satisfy condition set in cb function', () => {
      expect(find([1, 2, 3], num => num > 3)).toBeUndefined();
    });
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    }); 
    it('should filter array elements that satisfy conditions set in callback function', () => {
      const filter = arrayFunctions.filter;
      expect(filter([1, 2, 3], num => num > 2)).toBeDefined();
      expect(filter([1, 2, 3], num => num > 2)).toEqual([3]);
    });
    it('should return empty array if conditions are not satisfied', () => {  
      const filter = arrayFunctions.filter;
      expect(filter([1, 2, 3], num => num > 3)).toBeDefined();
    }); 
  });

});
