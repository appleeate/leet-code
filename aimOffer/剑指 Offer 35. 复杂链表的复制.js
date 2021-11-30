/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // 用list保存新的节点
  // 用map保存节点的下标
  // 配合完成random的指向
  let list = [], map = new Map();
  while (head) {
    map.set(head, list.length)
    let cur = new Node(head.val, null, head.random)
    if (list.length > 0) list[list.length - 1].next = cur; // 完成next的指向
    list.push(cur)
    head = head.next;
  }
  list.forEach(_ => {
    _.random = list[map.get(_.random)]
  })
  return list[0];
};