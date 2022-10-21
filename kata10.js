const multiplicationTable = function(maxValue) {
  let a = '';
  for (let y = 1; y <= maxValue; y++) {
    for (let x = 1; x <= maxValue; x++) {
      a += (x * y);
      a += ' ';
    }
    a += '\n';
  }
  return a;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));