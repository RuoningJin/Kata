const squareCode = function(message) {
  let newMessage = '';
  let length = 0;
  let output = '';

  for (let m of message) {
    if (m !== ' ') {
      newMessage += m;
    }
  }

  length = Math.ceil(Math.sqrt(newMessage.length))

  for (let i = 0; i < length; i++) {
    for (let n = i; n < newMessage.length; n = n + length) {
      output += newMessage[n];
    }
    output += ' ';
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));