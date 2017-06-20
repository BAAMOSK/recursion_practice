function triangle(num) {
  return num > 0 ? num + triangle(num - 1) : 0;
}

console.log(triangle(6));
console.log(triangle(7));
console.log(triangle(8));
console.log(triangle(9));

//non recursive version

let t2 = num => {
  let acc = 0;
  for (num; num > 0; num--) {
    acc += num;
  }
  return acc;
}

console.log(t2(6));
