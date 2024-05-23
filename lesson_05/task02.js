const modifiString = (str) => {
  let newStr = str;
  
  newStr = newStr.toLowerCase();
  newStr = newStr[0].toUpperCase() + newStr.slice(1);

  return newStr
}

const newString = modifiString('hello World');
console.log('newString: ', newString);