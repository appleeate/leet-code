/*
        给定 matrix =
    [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],

    原地旋转输入矩阵，使其变为:
    [
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]
     */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      // 完成对角变换
      [(matrix[i][j]), (matrix[j][i])] = [(matrix[j][i]), (matrix[i][j])];
    }
  }
  // 完成轴对称变换
  matrix.map(item => item.reverse())
};
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(arr)
console.log(arr);
