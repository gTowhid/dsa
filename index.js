/* const arr = [1, 2, 3, [41, [421, 422, 423, 424], 43], [51, 52], 6];

function rev(test) {
  let arr2 = []; // new fresh array for output

  for (let i = 0; i < test.length; i++) {
    if (isNaN(test[i])) {
      const subArr = rev(test[i]); // recusion for each sub-array
      arr2[test.length - i] = subArr;
    } else {
      arr2[test.length - i] = test[i];
    }
  }

  let trash = arr2.shift(); // discarding the first element of created array
  return arr2;
}

console.log(rev(arr)); */

const arr = [-1, 0, 3, 5, 9, 12];
const target = 0;

function findIndex(array) {
  const index = Math.floor(array.length / 2);

  if (array[index] == target) {
    return index;
  } else if (array[index] < target) {
    return index + 1 + findIndex(array.slice(index + 1));
  } else if (array[index] > target) {
    return findIndex(array.slice(0, index));
  } else {
    return undefined;
  }
}

console.log(findIndex(arr) || -1);
