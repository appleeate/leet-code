/**
 * Definition for singly-linked list.
 * @param val
 * @constructor
 */
exports.ListNode = function (val) {
	this.val = val;
	this.next = null;
};

exports.display = function (val) {
	while (val) {
		console.log(val.val);
		val = val.next;
	}
};

// module.exports = {ListNode:ListNode};
