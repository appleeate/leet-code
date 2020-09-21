let list = require("./tools/list.js");
let {ListNode} = list;

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
const middleNode = function (head) {
	let curr = head; // 储存当前指针
	let pre = null; // 反转链表的节点
	while (curr) {
		let tmp = curr.next; // 储存下一个节点的指针
		curr.next = pre; // 下一个节点指向 反转链表的节点
		pre = curr; // 反转链表节点 指针 指向当前节点
		curr = tmp; // 继续向下走
	}
	return pre;
};
