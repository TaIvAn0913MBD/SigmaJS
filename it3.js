let data = [
  "Засгийн",
  "газарт",
  "6.4",
  "сая",
  "тонн",
  "Нүүрс",
  "алдагдсан",
  "гэх",
  "мэдээлэл",
  "ирээгүй",
  "байна.",
  "Бодит",
  "байдалд",
  "ийм",
  "их",
  "хэмжээний",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "асуудал",
  "эргэлзээтэй",
  "байна.",
  "Хууль",
  "хяналтын",
  "байгууллага",
  "хяналт",
  "шалгалтын",
  "ажил",
  "явуулж",
  "байна",
];
let ug = prompt("ugee bich").toLocaleUpperCase();
// let ug1 = ug.toLocaleUpperCase();
// let data1 = data.join("");
// let data2 = data1.toLocaleUpperCase();
// let result = data2.match(ug1).length;
// console.log("Taniii ug " + " " + result + " " + "shirheg bna");

let shirheg = 0;
for (i = 0; i < data.length; i++) {
  if (ug == data[i].toLocaleUpperCase()) {
    shirheg += 1;
  }
}
console.log("Taniii ug " + " " + shirheg + " " + "shirheg bna");
