/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
  if (timeSeries.length === 0 || duration === 0) return 0;
  let res = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    const cur = timeSeries[i], next = timeSeries[i + 1];
    if (cur + duration <= next) {
      res += duration
    } else {
      res += (next - cur)
    }
  }
  return res + duration;
};
console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2, 2, 2, 2, 2,], 2));