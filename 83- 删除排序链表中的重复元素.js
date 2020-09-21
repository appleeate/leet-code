/**
 * Definition for singly-linked list.
 * function List(val) {
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
	let cur = head;
	while(cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next;
		} else {
			// 继续向下找
			cur = cur.next;
		}
	}
	return head;
};
