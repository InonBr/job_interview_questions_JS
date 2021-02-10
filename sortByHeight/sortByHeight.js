/* 
    Some people are standing in a row in a park. There are trees between them which cannot be moved. 
    Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
    People can be very tall!

    Example

    For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
    sortByHeight(a) ===> [-1, 150, 160, 170, -1, -1, 180, 190].
*/

const sortByHeight = (arr) => {
  const sorted = arr.filter((height) => height > 0).sort((a, b) => a - b);

  return arr.map((height) => {
    if (height !== -1) {
      return sorted.shift();
    }

    return -1;
  });
};

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(
//   sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])
// );
// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
