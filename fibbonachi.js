let shir = Number(prompt("ta hediig husej bna"));
let too1 = 0;
let too2 = 1;
let huv;
for (let i = 1; i < shir; i++) {
  console.log(too1);
  huv = too1 + too2;
  too1 = too2;
  too2 = huv;
}

// let sum = 0;
// let studentsAges = [13, 22, 34, 41, 56, 68, 75, 87, 99];
// for (let i = 0; i < studentsAges.length; i++) {
//   sum += studentsAges[i];
// }
// let avarage = sum / studentsAges.length;
// console.log(avarage);

// let sum = 0;
// let userB = [1000, 2000, 2500, 4000000, 13054, 323425];
// for (let i = 0; i < userB.length; i++) {
//   sum = 0;
//   sum += (userB[i] / 100) * 115;
// }
// console.log(userB);
