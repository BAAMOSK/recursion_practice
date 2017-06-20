function binaryConverter(num) {
  if (num < 1) return ''

  if (num % 2 === 0) {
    return binaryConverter(num / 2) + '0'
  } else {
    return binaryConverter(Math.floor(num / 2)) + '1'
  }
}

const result = binaryConverter(25);
console.log(result);
//11001

//non-recursive

let bc = num => {
  let acc = "";
  while (num >= 1) {
    if (num % 2 === 0) {
      acc = 0 + acc;
    } else {
      acc = 1 + acc;
    }
    num = Math.floor(num / 2);
  }
  return acc;
}

console.log(bc(1));
console.log(bc(2));
console.log(bc(3));
console.log(bc(4));
console.log(bc(5));
console.log(bc(6));
console.log(bc(7));
console.log(bc(8));
console.log(bc(9));
console.log(bc(10));
console.log(bc(11));
console.log(bc(12));
console.log(bc(13));
console.log(bc(14));
console.log(bc(15));
console.log(bc(10101));
