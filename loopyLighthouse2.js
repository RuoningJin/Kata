const loopyLighthouse = function(range, numbers, words) {
  const n0 = numbers[0];
  const n1 = numbers[1];
  const w0 = words[0];
  const w1 = words[1];
  for (let i = range[0]; i <= range[1]; i++) {
    let output = '';
    if (i % n0 === 0) {
      output += w0;
    }
    if (i % n1 === 0) {
      output += w1;
    }
    console.log(output === '' ? i : output);
  }
};
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));