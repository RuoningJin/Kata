const sumLargestNumbers = function(data) {
  let larNum = 0;
  let larNumTwo = 0;
  let l = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > larNum) {
      larNum = Number(data[i]);
      l = i;
    }
  } 
  data.splice(l, 1);
  for (let i = 0; i < data.length; i++) {
    if (data[i] > larNumTwo) {
      larNumTwo = Number(data[i]);
  }
}  
return larNum + larNumTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([10, 1]));
console.log(sumLargestNumbers([2, 1, 3]));
console.log(sumLargestNumbers([4, 10, 34, 6, 92, 2]));