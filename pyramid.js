let too = prompt("ta toogoo bich");
result = "";
od = "*";
zai = "";

for (let i = 1; i <= Number(too); i++) {
  for (let z = 0; z < Number(too) - i; z++) {
    result += "-";
  }
  for (let l = 0; l < i; l++) {
    result += od;
    result += " ";
  }

  result += "\n";
}
console.log(result);
