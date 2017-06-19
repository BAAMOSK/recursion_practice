function triangle(num) {
  return num > 0 ? num + triangle(num - 1) : 0;
}

console.log(triangle(5));