/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
  let l = 0;
  while (l + 1 && arr[l] < arr[l + 1]) l++;
  return l;
};

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,3,0]));
