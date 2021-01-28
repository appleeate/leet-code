/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  // x是横向坐标 y是纵向坐标 初始值为矩阵右上角
  let [x, y] = [matrix[0].length - 1, 0];
  while (x >= 0 && y < matrix.length) {
    if (matrix[y][x] > target) {
      x--;
    } else if (matrix[y][x] < target) {
      y++;
    } else {
      return true;
    }
  }
  return false;
};

console.log(searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20));
