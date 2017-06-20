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

//non-recursive version

let f2 = num => {
  let f = [];
  let i = 1;
  while (i <= num) {
    if (i == 1 || i == 2) {
      f.push(1);
    } else {
      //console.log("val of f[i-3]: " + f[i - 3])
      //console.log("val of f[i-2]: " + f[i - 2])
      //console.log(f[i - 2])
      f.push(f[i - 2] + f[i - 3]);
    }
    i++;
  }
  //console.log(f)
  return f[f.length - 1];
}
console.log(f2(1));
console.log(f2(2));
console.log(f2(3));
console.log(f2(4));
console.log(f2(5));
console.log(f2(6));
console.log(f2(7));
