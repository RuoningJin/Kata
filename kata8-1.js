const repeatNumbers = function(data) {
  let a = '';
  let b = data[0][1];
  for (let d of data) {   
    for (let i = 0; i < d[1]; i++) {
      if (d[1] !== b) {
        a += ',';
      }
      a += d[0];
      b = d[1];
    }
  }
  return a;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));