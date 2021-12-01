/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    let mid = left + ~~((right - left) / 2);
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[right]) {
      right = mid
    } else {
      right--
    }
  }
  return numbers[left]
};
console.log(minArray[[3, 4, 5, 1,2]]);
