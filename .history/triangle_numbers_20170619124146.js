function triangle(num) {
  return num > 0 ? num + triangle(num - 1) : 0;
}

console.log(triangle(6));
console.log(triangle(7));
console.log(triangle(8));
console.log(triangle(9));