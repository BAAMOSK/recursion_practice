let ana = (str) => {
  console.log(str)
  let results = [];

  let calculate = (prefix, _str) => {
    //console.log(prefix)
    if (_str.length === 0) {
      results.push(prefix);
      return;
    }
    for (let i = 0; i < _str.length; i++) {
      calculate(prefix + _str[i], _str.slice(0, i) + _str.slice(i + 1));
    }
  }

  calculate("", str)
  return results;
}

console.log(ana("Joe"));
