function factor(num) {
  if(num === 1) return 1;
  return num * factor(num - 1);
}

console.log(factor(3))