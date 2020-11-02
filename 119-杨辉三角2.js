/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  // const res = [];
  // if (rowIndex <= 0) return [1];
  // for (let i = 0; i <= rowIndex; i++) {
  //   const arr = [];
  //   for (let j = 0; j <= i; j++) {
  //     if (j > 0 && j < i) { // 如果不是两侧的话 那么就取 上一层的两数之和
  //       arr.push(res[i - 1][j - 1] + res[i - 1][j])
  //     } else { // 是两侧 直接push 1
  //       arr.push(1)
  //     }
  //   }
  //   res.push(arr)
  // }
  // return res[rowIndex];
  let resultArr = [1];
  for (let i = 0; i < rowIndex; i++) {
    resultArr.unshift(0);
    for (let j = 0; j < i + 1; j++) {
      resultArr[j] = resultArr[j] + resultArr[j + 1];
    }
  }
  return resultArr;

};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(3));
