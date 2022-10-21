const conditionalSum = function(values, condition) {
  let newV = [];
  for (const value of values) {
    if (condition === 'even' && value % 2 === 0) {
      newV.push(value);
      } else if (condition === 'odd' && value % 2 !== 0) {
        newV.push(value);
      }
    }
  let newNum = 0;
  for (let newv of newV) {
    newNum += newv;
  }
  return newNum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5, 8], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));