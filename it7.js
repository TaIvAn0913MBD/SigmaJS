let arr1 = [4, 2, 34, 4, 1, 12, 1];
let add = 0;
for (i = arr1.length; i > 0; i--) {
  for (l = i; l < arr1.length; l++) {
    if (arr1[i] === arr1[l]) {
      console.log([arr1[l]]);
    }
  }
}
