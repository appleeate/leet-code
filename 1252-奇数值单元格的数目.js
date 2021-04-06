/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (m, n, indices) {
  let arr = Array.apply(null, Array(m)).map(t => Array(n).fill(0));
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i][0]] = arr[indices[i][0]].map(_ => _ + 1);
    for (let j = 0; j < arr.length; j++) {
      arr[j][indices[i][1]] += 1;
    }
  }
  return arr.flat(Infinity).filter(_ => _ % 2 !== 0).length;
};
oddCells(2, 3, [[0, 1], [1, 1]]);
oddCells(2, 2, [[1, 1], [0, 0]]);
console.log(oddCells(28, 38, [[17, 16], [26, 31], [19, 12], [22, 24], [17, 28], [23, 21], [27, 32], [23, 27], [23, 33], [18, 7], [4, 20], [0, 31], [25, 33], [5, 22]]));



