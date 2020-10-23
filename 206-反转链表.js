let list = require("./tools/list.js");
let {ListNode, display} = list;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
	if (!head || !head.next) return head;
	let prev = null, curr = head;
	while (curr) {
		// 用于临时存储 curr 后继节点
		let next = curr.next;
		// 反转 curr 的后继指针
		curr.next = prev;
		// 变更prev、curr
		// 待反转节点指向下一个节点
		prev = curr;
		curr = next
	}
	return prev;
};

console.log(reverseList(listNode));
