let arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let sondgoi = 0;
let tegsh = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    sondgoi += 1;
  } else {
    tegsh += 1;
  }
}
console.log("End" + " " + sondgoi + " " + "sondgoi too baina");
console.log("End" + " " + tegsh + " " + "tegsh too baina");
