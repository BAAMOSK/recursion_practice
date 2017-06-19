let fibber = (num = 0) => {
  if (num <= 2) {
    return 1;
  }
  return fibber(num - 1) + fibber(num - 2)
}
console.log(fibber(1))
console.log(fibber(2))
console.log(fibber(3))
console.log(fibber(4))
console.log(fibber(5))
console.log(fibber(6))
console.log(fibber(7))
