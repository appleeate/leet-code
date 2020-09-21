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
	let slow = head; // 储存当前指针
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};
