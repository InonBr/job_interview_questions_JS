/*
    Ticket numbers usually consist of an even number of digits. 
    A ticket number is considered lucky if the sum of the first half of 
    the digits is equal to the sum of the second half.

    Given a ticket number n, determine if it's lucky or not.

    Examples

    For n = 1230, the output should be ===> isLucky(n) = true;
    
    For n = 239017, the output should be ===> isLucky(n) = false.
*/

const isLucky = (n) => {
  const nArr = n.toString(10).split('');
  let firstHalf = 0;
  let lastHalf = 0;

  for (let i = 0; i < nArr.length; i++) {
    if (i < nArr.length / 2) {
      firstHalf += parseInt(nArr[i], 10);
    } else {
      lastHalf += parseInt(nArr[i], 10);
    }
  }

  return firstHalf === lastHalf;
};

// console.log(isLucky(1230));
// console.log(isLucky(239017));
// console.log(isLucky(25016));
// console.log(isLucky(25117));
