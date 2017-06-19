function binaryConverter(num) {
  if(num < 1) return ''

  if (num % 2 === 0) {
    return binaryConverter(num/2) + '0'
  } else {
    return binaryConverter(Math.floor(num/2)) + '1'
  }
}

const result = binaryConverter(25);
console.log(result);
//11001