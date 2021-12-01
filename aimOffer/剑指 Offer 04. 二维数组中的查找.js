/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) return false;
  let [x, y] = [matrix[0].length - 1, 0]
  while (x >= 0 && y < matrix.length) {
    if (matrix[y][x] > target) {
      x--
    } else if (matrix[y][x] < target) {
      y++
    } else {
      return true
    }
  }
  return false
};

console.log(findNumberIn2DArray([
], 10));