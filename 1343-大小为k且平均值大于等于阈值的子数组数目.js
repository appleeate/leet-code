/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {
  const res = [];
  const dfs = (index, list) => {
    if (index === arr.length && list.length === k) {
      res.push(list.slice());
      return;
    }
    list.push(arr[index]);
    dfs(index + 1, list);
    list.pop();
    dfs(index + 1, list)
  };
  dfs(0, []);
  console.log(res);
};

numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4);
