let range = function (start, end, step) {
  let output = [];
  if (start === undefined || end === undefined || step === undefined) {
    return output;
  } else if (start > end) {
    return output;
  } else if (step <= 0) {
    return output;
  } 
  output.push(start);
  for (let i = start; i < end; i = i++) {
    output.push(i += step);
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));