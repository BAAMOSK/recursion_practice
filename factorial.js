function factor(num) {
  if (num === 1) return 1;
  return num * factor(num - 1);
}

console.log(factor(4));

//non-recursive

let f2 = n => {
  let acc = 1;
  while (n > 0) {
    acc *= n;
    n -= 1;
  }
  return acc;
}
console.log(f2(4));
