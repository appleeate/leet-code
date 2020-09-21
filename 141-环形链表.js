/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
	// 1个或者两个 构不成环
	if (!head || !head.next) return false;
	while (head) {
		if (head.flag) return true;
		head.flag = true;
		head = head.next;
	}
	return false

	/*Map方法*/
	// if(!head || !head.next) return false
	// let map = new Map()
	// while (head) {
	// 	if (map.has(head)) return true
	// 	map.set(head, true)
	// 	head = head.next
	// }
	// return false


	/*快慢指针法*/
	// if (!head || !head.next) return false
	// let slow = head
	// let fast = head.next
	// while (slow != fast) {
	// 	if (!fast || !fast.next) return false
	// 	fast = fast.next.next
	// 	slow = slow.next
	// }
	// return true

};
