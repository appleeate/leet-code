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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
	const dumpy1 = new ListNode(-1), dumpy2 = new ListNode(-1);
	dumpy1.next = head;
	let left = dumpy1, right = dumpy2;
	while (left && left.next) {
		const current = left.next;
		if (current.val >= x) {
			right.next = current; // [大]链表中添加 大数字
			right = current; // 移动右指针
			left.next = current.next; // 删除[小]链表中 大数字
			current.next = null;
		} else {
			left = current; // 移动左指针
		}
	}
	left.next = dumpy2.next;
	return dumpy1.next;
};

let list = new ListNode(1);
list.next = new ListNode(4);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(5);
list.next.next.next.next.next = new ListNode(2);

let res = partition(list, 3);
while (res && res.next) {
	res = res.next;
	console.log(res.val);
}

