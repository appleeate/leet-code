/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  // 使用 贪心算法
  const len = gas.length;
  let run = 0,//  表示车辆在前i个加油站能够跑起来
    diff = 0, // 表示全程预计算后油量和油耗差值
    k = 0;
  // 只有remain大等于0，汽车才能跑完全程
  for (let i = 0; i < len; i++) {
    run += gas[i] - cost[i];
    diff += gas[i] - cost[i];
    if (run < 0) {
      k = i + 1;
      run = 0
    }
  }
  return diff < 0 ? -1 : k;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
