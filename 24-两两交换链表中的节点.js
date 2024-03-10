/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const {logList} = require("./tools/list");

function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
	let thead = new ListNode(0);
	thead.next = head;
	let tmp = thead;
	while (tmp.next !== null && tmp.next.next !== null) {
		let start = tmp.next; // 1
		let end = start.next; // 2
		tmp.next = end; // 0 -> 2
		start.next = end.next; //1 -> 3
		end.next = start; // 2 -> 1
		tmp = start;
	}
	return thead.next;
};
let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
let newNode = swapPairs(node);
logList(newNode)
console.log(newNode);
// console.log(newNode.next);
