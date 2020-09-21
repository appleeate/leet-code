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
let test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(2);
test.next.next.next = new ListNode(1);
/**
 * 使用 快慢指针
 * 链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/shi-jian-fu-za-du-wei-onde-zhi-zhen-shi-xian-xiang/
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
	if (head === null || head.next === null) return true;
	let mid = head;
	let pre = null;
	let reversed = null;
	// end每次走两格 这个循环的事件复杂度为O(n/2)
	while (head !== null && head.next !== null) {
		// 这个复制在mid被修改之前
		pre = mid;
		// 遍历链表
		mid = mid.next;
		head = head.next.next;
		// 反转前面部分的节点 并用reversed保存
		pre.next = reversed;
		reversed = pre;
	}
	// 如果是奇数链表 mid 向后再走一位
	if (head) mid = mid.next;
	while (mid) {
		if (reversed.val !== mid.val) return false;
		reversed = reversed.next;
		mid = mid.next
	}
	return true
};

console.log(isPalindrome(test));
