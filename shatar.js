let hemjee = prompt("odoo shatar hiine ta toogoo heleerei");
od = "_";
zur = "#";
// _#_#_#
// 0 1 2 3 4
let result = "";

let space = 0;

if (Number(hemjee) % 2 === 0) {
  space = Number(hemjee) / 2;
} else {
  space = Math.floor(Number(hemjee)) / 2;
}

for (let i = 0; i < Number(hemjee) / 2; i++) {
  for (j = 0; j < Number(hemjee); j++) {
    if (j % 2 == 1) {
      result += od;
    } else {
      result += zur;
    }
  }

  result += "\n";

  for (let i = 0; i < j; i++) {
    if (i % 2 == 1) {
      result += zur;
    } else {
      result += od;
    }
  }
  result += "\n";
}
console.log(result);
// for (let j = 0; j < Number(hemjee) / 2; j++) {
//   for (let i = 0; i < Number(hemjee); i++) {
//     if (i % 2 == 1) {
//       result += "#";
//     } else {
//       result += "_";
//     }
//   }
//   result += "\n";

//   for (let j = 0; j < Number(hemjee) / 2; j++) {
//     if (j % 2 == 1) {
//       result += "_";
//     } else {
//       result += "#";
//     }
//   }
//   result += "\n";
// }
