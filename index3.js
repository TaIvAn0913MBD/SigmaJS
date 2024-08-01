// //1
// function MyName() {
//   console.log("Munkhbold Taivan");
// }
// MyName();

// //2
// let ehni = prompt("ehnii neree bich");
// let hoyr = prompt("Hoyradahi neree bich");
// function MyName(a, b) {
//   return a + " " + b;
// }
// console.log(MyName(ehni, hoyr));

//3
// let ehni = Number(prompt("ehnii toogoo bich"));
// let hoyr = Number(prompt("Hoyradahi toogoo bich"));
// function MyName(a, b) {
//   return a + b;
// }
// console.log(MyName(ehni, hoyr));

// 4;
// let ehni = Number(prompt("ehnii toogoo bich"));
// let hoyr = Number(prompt("Hoyradahi toogoo bich"));
// function MyName(a, b) {
//   let arr = [];
//   for (let i = a; i < b; i++) {
//     if (i % 2 == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(MyName(ehni, hoyr));

//5
// let ehni = Number(prompt("ehnii toogoo bich"));
// let hoyr = Number(prompt("Hoyradahi toogoo bich"));
// function MyName(a, b) {
//   let arr = [];
//   for (let i = a; i < b; i++) {
//     if (i % 2 == 1 && i > 1) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(MyName(ehni, hoyr));

// //6
let too = Number(prompt("Ta toogoo bich"));
let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
function inc(a) {
  if (arr.includes(a)) {
    return arr.indexOf(a);
  } else {
    return "-1";
  }
}
alert(inc(too));

//7
// let arr = [1, 3, 5, 7, 9, 2];
// let a = 0;
// function dund() {
//   for (i = 0; i < arr.length; i++) {
//     a += arr[i];
//   }
//   return a / arr.length;
// }
// console.log(dund());

//8
// let ug = "Mongolia";
// function tomUseg(a) {
//   return a.toLocaleUpperCase();
// }
// console.log(tomUseg(ug));

//9
// let ug = "Mongolia";
// function jijigUseg(a) {
//   return a.toLocaleLowerCase();
// }
// console.log(jijigUseg(ug));
