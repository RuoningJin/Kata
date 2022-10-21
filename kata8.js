const repeatNumbers = function(data) {
  let a = '';
  for (let d = 0; d < data.length; d++) {
    for (let i = 0; i < data[d][1]; i++) {
      a += data[d][0];
      if (data[d][1] === data[d][1]) {
        a += ',';
      }
    }
  }
  return a;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

