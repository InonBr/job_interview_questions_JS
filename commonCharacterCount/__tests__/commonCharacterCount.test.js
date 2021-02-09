const { expect } = require('@jest/globals');
const commonCharacterCount = require('../commonCharacterCount');

test('should work', () => {
  expect(commonCharacterCount('a', 'b')).toBe(0);
  expect(commonCharacterCount('abca', 'xyzbac')).toBe(3);
  expect(commonCharacterCount('zzzzzzz', 'zzzz')).toBe(4);
});

test('should throw a type error', () => {
  expect(() => {
    commonCharacterCount('a', 10);
  }).toThrow('both parameters must be strings');

  expect(() => {
    commonCharacterCount(true, 'dsa');
  }).toThrow('both parameters must be strings');
});
