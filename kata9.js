const camelCase = function(input) {
  newString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      newString += input[i + 1].toUpperCase();
      i += 1;
    } else {
      newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));