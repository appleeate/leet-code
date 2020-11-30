/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const map = {};
  const res = [];
  for (const num1 of nums1) { // 记录nums1各个数字的出现次数
    if (map[num1]) {
      map[num1]++;
    } else {
      map[num1] = 1;
    }
  }
  for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
    const val = map[num2];
    if (val > 0) {            // 有出现过
      res.push(num2);         // 推入res数组
      map[num2]--;            // 匹配掉一个，就减一个
    }
  }
  return res;

  // nums1.sort((a, b) => a - b);
  // nums2.sort((a, b) => a - b); // 为了使相同元素相邻出现
  // const res = [];
  // let p1 = 0;                  // p1扫描nums1
  // let p2 = 0;                  // p2扫描nums2
  // while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界就不能找交集
  //   if (nums1[p1] > nums2[p2]) { // p1指向的数大，移动p2，期待扫到一样大的
  //     p2++;
  //   } else if (nums1[p1] < nums2[p2]) { // p2指向的数大，移动p1，期待扫到一样大的
  //     p1++;
  //   } else {                   // 遇到相同的，推入res数组，两指针均右移考察下一个
  //     res.push(nums1[p1]);
  //     p1++;
  //     p2++;
  //   }
  // }
  // return res;

};
