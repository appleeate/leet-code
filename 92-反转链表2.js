/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
	if (!head || !head.next) return head;
	let dummy = new ListNode(0);
	dummy.next = head;
	let tmpHead = dummy;
	// 找到第m-1个链表节点
	for(let i = 0;i < m - 1;i++){
		tmpHead = tmpHead.next;
	}


	let prev = null;
	let curr = tmpHead.next;
	for(let i = 0;i <= n - m;i++){
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	// 将翻转的部分链表 和 原链表拼接
	tmpHead.next.next = curr;
	tmpHead.next = prev;
	return dummy.next;

};
