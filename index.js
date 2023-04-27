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

/* const arr = [-1, 0, 3, 5, 9, 12];
const tar = 12;

function findIndex(array, target) {
  const index = Math.floor(array.length / 2);

  if (array[index] == target) {
    return index;
  } else if (array[index] < target) {
    const interResult = findIndex(array.slice(index + 1), target);
    return interResult >= 0 ? index + 1 + interResult : -1;
  } else if (array[index] > target) {
    const interResult = findIndex(array.slice(0, index), target);
    return interResult >= 0 ? interResult : -1;
  }
}

console.log(findIndex(arr, tar)); */

function digitizer(number) {
  if (number < 10) return number;
  else {
    let digit_arr = number.toString().split('');

    let result;
    do {
      result = digit_arr.reduce((total, digit) => {
        return total + parseInt(digit);
      }, 0);

      digit_arr = result.toString().split('');
    } while (result > 9);

    return result;
  }
}

console.log(digitizer(543));
