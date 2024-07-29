let arr1 = [4, 2, 34, 4, 1, 12, 1, 4, 5];
let add = [];
too = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let l = i + 1; l < arr1.length; l++) {
    if (arr1[i] === arr1[l]) {
      if (add.includes(arr1[i])) {
      } else {
        add.push(arr1[i]);
      }
    }
  }
}
console.log(add);
