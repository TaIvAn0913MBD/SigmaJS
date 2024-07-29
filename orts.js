// let DT = Number(prompt("davhar shirhegee bich"));
// let AT = Number(prompt("ailiin shirhegee bich"));
let HT = Number(prompt("haalgani toogoo bich"));
let DT = 5;
let AT = 4;
// let HT = 10;
if (HT % AT > 0) {
  a = Math.floor(HT / AT) + 1;
}
if (HT % AT == 0) {
  a = HT / AT;
}
if (HT % AT == 0) {
  b = AT - (HT % AT);
}
if (HT % AT > 0) {
  b = 0 + (HT % AT);
}
console.log(a + " " + b);
