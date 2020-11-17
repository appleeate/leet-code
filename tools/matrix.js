/**
 * 初始化一个二维数组
 * @param {number} r 行数
 * @param {number} c 列数
 * @param {*} init 初始值
 */
const initMatrix = (r, c, init = 0) => new Array(r).fill().map(_ => new Array(c).fill(init));
/**
 * 获取一个二维数组的行数和列数
 * @param {any[][]} matrix
 * @return [row, col]
 */
const getMatrixRowAndCol = (matrix) => matrix.length === 0 ? [0, 0] : [matrix.length, matrix[0].length];
/**
 * 遍历一个二维数组
 * @param {any[][]} matrix
 * @param {Function} func
 */
const matrixFor = (matrix, func) => {
  matrix.forEach((row, i) => {
    row.forEach((item, j) => {
      func(item, i, j, row, matrix);
    });
  })
};

/**
 * 获取矩阵第index个元素 从0开始
 * @param {any[][]} matrix
 * @param {number} index
 */
function getMatrix(matrix, index) {
  let col = matrix[0].length;
  let i = ~~(index / col);
  let j = index - i * col;
  return matrix[i][j];
}

/**
 * 设置矩阵第index个元素 从0开始
 * @param {any[][]} matrix
 * @param {number} index
 * @param value
 */
function setMatrix(matrix, index, value) {
  let col = matrix[0].length;
  let i = ~~(index / col);
  let j = index - i * col;
  return matrix[i][j] = value;
}

module.exports = {initMatrix, matrixFor, setMatrix};
