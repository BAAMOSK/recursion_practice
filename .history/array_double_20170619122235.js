var nums = [1,5,7,9,6];

function doubleNums(arr) {

  if(arr.length === 0) return [];

  return [arr[0] * 2, ...doubleNums(arr.slice(1))];

}
console.log(doubleNums(nums));