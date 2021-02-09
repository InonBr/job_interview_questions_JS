const checkPalindrome = (inputString) => {
  if (typeof inputString !== 'string') {
    throw new Error('You must provide a string');
  }

  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/\s+/g, '');

  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - i - 1]) {
      return false;
    }
  }

  return true;
};

module.exports = checkPalindrome;
