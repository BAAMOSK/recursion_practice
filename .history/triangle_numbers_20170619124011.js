function triangle(num) {
  if(num > 0) return num + triangle(num - 1) : 0;
}

console.log(triangle(num));