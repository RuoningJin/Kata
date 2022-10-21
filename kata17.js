const urlDecode = function(text) {
  let output = {};
  let index = 0;
  for (i = index; i < text.length; i++) {
    let key = '';
    let value = '';
    for (i = index; i < text.length; i++) {
      index = i;
      if (text[i] === '=') break;
      key += text[i];
    }
    for (i = index + 1; i < text.length; i++) {
      index = i;
      if (text[i] === '&') break;
      if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
        value += ' ';
        i += 2;
      } else {
        value += text[i];
      }
    }
    output[key] = value;
    index += 1;
  }
  return output;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);