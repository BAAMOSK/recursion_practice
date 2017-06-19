function binaryConverter(num) {
  if(num < 1) return ''

  if (num % 2 === 0) {
    return '0' + binaryConverter(num/2)
  } else {
    return '1' + binaryConverter(num/2)
  }

}

const result = binaryConverter(26);
console.log(result);
//11001