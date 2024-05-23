const revertStr = (str) => {
  let newStr = str;
  newStr = newStr.split('').reverse().join('');
  return newStr
}

const newStr = revertStr('hello world')
console.log('newStr: ', newStr);
