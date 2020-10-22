/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
	const res = new ListNode(-1);
	let left = res;
	let add = 0, sum = 0;
	while (l1 || l2) {
		sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
		left.next = new ListNode(sum % 10);
		left = left.next;
		add = sum >= 10 ? 1 : 0;
		l1 && (l1 = l1.next);
		l2 && (l2 = l2.next);
	}
	add && (left.next = new ListNode(add));
	return res.next;
};

let left = new ListNode(9);
left.next = new ListNode(9);
left.next.next = new ListNode(9);
// left.next.next.next = new ListNode(9);

let right = new ListNode(9);
right.next = new ListNode(9);
right.next.next = new ListNode(9);
right.next.next.next = new ListNode(9);

let res = addTwoNumbers(left, right);
while (res && res.next) {
	res = res.next;
	console.log(res.val);
}
