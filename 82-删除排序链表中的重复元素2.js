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
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
	let dummy = new ListNode(-1);
	dummy.next = head;
	let fast = head, slow = dummy;
	while (fast && fast.next) {
		if (fast.val === fast.next.val) {
			let sameVal = fast.val;
			while (fast && fast.val === sameVal) fast = fast.next;
			slow.next = fast;
		} else {
			fast = fast.next;
			slow = slow.next
		}
	}
	return dummy.next;
};
