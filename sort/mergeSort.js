/*
* 归并排序
* */

const mergeSort = (arr) => {
  const len = arr.length;
  if (len === 1) return arr; // 长度为一  递归停止

  const mid = len >> 1;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, len);

  return merge(mergeSort(left), mergeSort(right))
};

const merge = (left, right) => {
  const res = [];
  let iL = 0, iR = 0;
  while (iL < left.length && iR < right.length) {
    if (left[iL] < right[iR]) {
      res.push(left[iL]);
      iL++;
    } else {
      res.push(right[iR]);
      iR++;
    }
  }
  while (iL < left.length) {
    res.push(left[iL]);
    iL++;
  }
  while (iR < right.length) {
    res.push(right[iR]);
    iR++;
  }

  return res;
};

console.log(mergeSort([2, 9, 1, 8]));
// console.log(mergeSort([2, 9, 1, 8, 3, 4, 5, 6, 7]));
