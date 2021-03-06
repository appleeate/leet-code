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
const detectCycle = function (head) {
	if (!head || !head.next) return null;
	let map = new Map();
	while (head) {
		if (map.has(head)) return map.get(head);
		map.set(head, head);
		head = head.next;
	}
	return null;
};
