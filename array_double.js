var nums = [1, 5, 7, 9, 6];

function doubleNums(arr) {

  if (arr.length === 0) return [];

  return [arr[0] * 2, ...doubleNums(arr.slice(1))];

}
console.log(doubleNums(nums));

//non-recursive

let dn = arr => {
  return arr.map(el => el * 2);
}

console.log(dn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
