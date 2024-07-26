let arr2 = [4, 2, 34, 4, 12, 1];
let arr1 = [3, 45, 23, 78, 34];
too = 0;
for (m = arr1.length; m < arr2.length; m++) {
  arr1.push(1);
}
for (m = arr2.length; m < arr1.length; m++) {
  arr2.push(1);
}
let add = " ";
for (i = 0; i < arr2.length; i++) {
  too = 0;
  too += arr1[i] * arr2[i];
  add += too + " ";
}
console.log([add]);
