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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
	while (headA) {
		headA.flag = true;
		headA = headA.next;
	}
	while (headB) {
		if (headB.flag) return headB;
		headB = headB.next;
	}

	/* 双指针法
	*
	*  拼接链表 长短相拼 如果相遇 一定会找到
	* */
	// let pA = headA;
	// let pB = headB;
	// while(pA !== pB){
	// 	pB = pB? pB.next: headA;
	// 	pA = pA? pA.next: headB;
	// }
	// return pA;

};


