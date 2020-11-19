/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0); // 入度数组
  const map = {};                                 // 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;              // 求课的初始入度值
    if (map[prerequisites[i][1]]) {               // 当前课已经存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
    } else {                                      // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  console.log(inDegree);
};
console.log(canFinish(6,[[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]));
