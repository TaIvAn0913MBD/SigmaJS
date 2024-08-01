let arr = [5, 7, 9, 3, 10, -2, -4, 0];
let NemehToondInf = Infinity;
let HasahToondInf = -1 * Infinity;
function davtalt() {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < NemehToondInf && arr[i] >= 0) {
      NemehToondInf = arr[i];
    }

    if (arr[i] > HasahToondInf && arr[i] < 0) {
      HasahToondInf = arr[i];
    }
  }
  if (NemehToondInf * -1 > HasahToondInf) {
    console.log("Hamgiin baga tegtei oirhon too3 bol" + " " + NemehToondInf);
  }
  if (NemehToondInf * -1 < HasahToondInf) {
    console.log("Hamgiin baga tegtei oirhon too2 bol" + " " + HasahToondInf);
  }
  if (NemehToondInf * -1 == HasahToondInf) {
    console.log(
      "Hamgiin baga tegtei oirhon too1 bol" +
        " " +
        HasahToondInf +
        " " +
        NemehToondInf
    );
  }
}
console.log(davtalt());
