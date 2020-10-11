/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
	if (!head) return null;
	let cur = head, n = 0;
	// 先成环
	while (++n && cur.next) cur = cur.next;
	cur.next = head;
	k = k % n; // 取余 即去重
	while (++k < n) head = head.next; // 找到打断位置
	// 重新拼接
	let tmp = head; // 临时存储head
	head = head.next; // head指向后一个
	tmp.next = null; // 临时储存的head指向null 打断环
	return head; // 完成
};
