const { expect } = require('@jest/globals');
const checkPalindrome = require('../isPalindrome');

test('should return true', () => {
  expect(checkPalindrome('    Red rum siR is MurDer     ')).toBe(true);
  expect(checkPalindrome('MaDam')).toBe(true);
  expect(checkPalindrome('a')).toBe(true);
});

test('should return false', () => {
  expect(checkPalindrome('Palindrome')).toBe(false);
  expect(checkPalindrome('soMe ranNdom tEst')).toBe(false);
  expect(checkPalindrome('test me')).toBe(false);
});

test('should throw an error if called without a param', () => {
  expect(() => {
    checkPalindrome();
  }).toThrow('You must provide a string');
});

test('should throw an error if called without a proper param', () => {
  expect(() => {
    checkPalindrome(10);
  }).toThrow('You must provide a string');

  expect(() => {
    checkPalindrome(true);
  }).toThrow('You must provide a string');
});
