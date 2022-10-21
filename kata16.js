const makeCase = function(input, cases) {
  let newString = '';
  for (i = 0; i < input.length; i++) {
    if (cases === 'camel') {
      if (input[i] === ' ') {
        newString += input[i + 1].toUpperCase();
        i += 1;
      } else {
        newString += input[i];
      }
    } else if (cases === 'pascal') {
      if (i === 0) {
        newString += input[i].toUpperCase();
      } else if (input[i] === ' ') {
        newString += input[i + 1].toUpperCase();
        i += 1;
      } else {
        newString += input[i];
      }
    } else if (cases === 'snake') {
      if (input[i] === ' ') {
        newString += '_';
      } else {
        newString += input[i];
      }
    } else if (cases === 'kebab') {
      if (input[i] === ' ') {
        newString += '-';
      } else {
        newString += input[i];
      }
    } else if (cases === 'title') {
      if (i === 0) {
        newString += input[i].toUpperCase();
      } else if (input[i - 1] === ' ') {
        newString += input[i].toUpperCase();
      } else {
        newString += input[i];
      }
    } else if (cases === 'vowel') {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        newString += input[i].toUpperCase();
      } else {
        newString += input[i];
      }
    } else if (cases === 'consonant') {
      if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u') {
        newString += input[i].toUpperCase();
      } else {
        newString += input[i];
      }
    } else if (cases[1] === 'snake') {
      if (input[i] === ' ') {
        newString += '_';
      } else {
        newString += input[i];
      }
      if (cases[0] === 'upper') {
        newString = newString.toUpperCase ();
      } else if (cases[0] === 'lower') {
        newString = newString.toLowerCase();
      }
    }
  }
  return newString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a STRing", ["lower", "snake"]));