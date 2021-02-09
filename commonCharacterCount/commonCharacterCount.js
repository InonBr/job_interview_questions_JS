// Given two strings, find the number of common characters between them.
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

const commonCharacterCount = (s1, s2) => {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    throw new TypeError('both parameters must be strings');
  }

  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        count++;
        s2 = changeletter(s2, j);
        break;
      }
    }
  }

  return count;
};

const changeletter = (word, index) => {
  word = word.split('');
  word[index] = '';
  return word.join('');
};

module.exports = commonCharacterCount;
