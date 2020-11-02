/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v1Length = v1.length;
  const v2 = version1.split(".");
  const v2Length = v2.length;
  const max = Math.max(v1Length, v2Length);
  for (let i = 0; i < max; i++) {
    const n1 = Number(v1[i] || 0);
    const n2 = Number(v2[i] || 0);
    if (n1 > n2) {
      return 1
    } else if (n1 < n2) {
      return -1
    } else {
      if (i === max - 1) return 0;
    }
  }
};

