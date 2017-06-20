let str_split = (str, sep, acc = [""]) => {
  if (str.length > 0) {
    let el = str[0];
    if (el === sep) {
      //console.log(acc)
      acc[acc.length] = "";

    } else {
      //console.log(acc)
      if (acc.length === 0) {
        acc[0] += el;
      } else {
        acc[acc.length - 1] += el;
      }
    }
    str_split(str.slice(1), sep, acc);
  } else {

    return acc;
  };
  return acc;
}

let x = str_split("test that bob failed", " ");
console.log(x[0])
console.log(x[3])
console.log(x);

//non-recursive version
let sp2 = (str, sep) => {
  let curr = [];
  let acc = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep) {
      acc.push(curr);
      curr = [];
    } else {
      curr.push(str[i]);
    }
  }
  if (curr.length > 0) acc.push(curr);
  acc = acc.map(val => {
    //console.log(val);
    return val.join("")
  });
  console.log("non recursive function returns \\/")
  console.dir(acc)
  return acc;
}

sp2("test that bob failed", " ")
