/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if(!head || !head.next) return head;
  let pre = null, // 结果
  cur = head; // 记录当前指针
  while(cur) {
    let next = cur.next; // 暂存后继节点
    cur.next = pre; // 反转指针
    pre = cur; // 记录结果
    cur = next; // 指针继续前进
  }
  return pre;
};