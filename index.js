const arr = [1, 2, 3, [41, [421, 422, 423, 424], 43], [51, 52], 6];

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

console.log(rev(arr));
