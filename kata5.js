const urlEncode = function(text) {
  let newLine = '';
  for (let i = 1; i < text.length - 1; i++) {
    text.charAt(i) === ' ' ? newLine += '%20' : newLine += text.charAt(i);
  }
  return newLine;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));