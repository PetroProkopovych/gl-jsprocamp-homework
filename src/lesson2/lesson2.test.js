import lesson2 from './index';

const {
    sum,
    sumAll,
    pow,
    random
} = lesson2.task;

describe('sum function', () => {
  test('sum works good', () => {
      expect(sum(1, 2)).toEqual(3);
  });
});


describe('sumAll function', () => {
  test('sumAll works good', () => {
      expect(sumAll(1, 2, 3, 4)).toEqual(10);
      expect(sumAll(1, 'a', 3, 4)).toEqual(8);
      expect(sumAll(1, 2, NaN, 4)).toEqual(7);
  });
});


describe('pow function', () => {
  test('pow works good', () => {
      expect(pow(2, 0)).toEqual(1);
      expect(pow(5, 3)).toEqual(125);
  });
});

describe('random function', () => {
  test('random works good', () => {
      expect(random(5, 10)).toBeGreaterThanOrEqual(5);
      expect(random(5, 10)).toBeLessThanOrEqual(10);
      expect(Number.isInteger(random(5, 10))).toBeTruthy();
  });
});
