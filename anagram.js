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

//Iterative version for testing with minor alterations from from
//https://www.quora.com/Whats-an-algorithm-to-print-the-permutations-of-a-string-without-recursion

function perm(a) {
  var r = [
      [a[0]]
    ],
    t = [],
    s = [];
  if (a.length <= 1) return a;
  for (var i = 1, la = a.length; i < la; i++) {
    for (var j = 0, lr = r.length; j < lr; j++) {
      r[j].push(a[i]);
      t.push(r[j]);
      for (var k = 1, lrj = r[j].length; k < lrj; k++) {
        for (var l = 0; l < lrj; l++) s[l] = r[j][(k + l) % lrj];
        t[t.length] = s;
        s = [];
      }
    }
    r = t;
    t = [];
  }
  return r.map(el => el.join(""));
}

console.log(perm("abcd"));
