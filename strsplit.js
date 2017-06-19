let str_split = (str, sep, acc = [""]) => {
  if (str.length > 0) {
    let el = str[0];
    if (el === sep) {
      console.log(acc)
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

//console.log(str_split("test that bob failed", " "));
