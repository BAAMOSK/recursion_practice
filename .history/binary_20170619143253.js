function binaryConverter(num) {
  if(num < 1) return ''

  if (num % 2 === 0) {
    return binaryConverter(num/2) + '0'
  } else {
    return binaryConverter(num/2) + '1'
  }

}

const result = binaryConverter(5);

console.log(result);
//11001