/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
  const len = arr.length;
  let l = 0, r = len - 1;
  while (l + 1 && arr[l] < arr[l + 1]) l++;
  while (r - 1 && arr[r - 1] >  arr[r]) r--;
  return l !== 0 && l === r && r !== len - 1;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([0,3,2,1]));
