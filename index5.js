// "asdf", "qwervbm" => "aqswdefrvbm"
// hariu =>"rsiizgzmsaizgimzaz"
let str1 = "rizzsigma";
let str2 = "sigmarizz";
let length1 = 0;
let result = [];
let huvi = 0;
function LOOP() {
  if (str1.length > str2.length) {
    length1 = str2.length;
  } else {
    length1 = str1.length;
  }
  for (let i = 0; i < length1; i++) {
    result.push(str1.at(i));
    result.push(str2.at(i));
    huvi = i;
  }
  if (str1.length > str2.length) {
    str1 += "@";
    result.push(str1.slice(huvi + 1, -1));
  }
  if (str1.length < str2.length) {
    str2 += "@";
    result.push(str2.slice(huvi + 1, -1));
  }
  return result;
}
console.log(LOOP());
