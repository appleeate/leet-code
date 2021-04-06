const {ListNode, getListFromArray, logList} = require("./tools/list");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(-1); // 哑节点
  let left = dummy; // 储存 指针位置
  let add = 0, // add 为 [进位] 如果两个值相加大于10 那么 add就代表下一位相加的时候 要额外加1
    sum = 0;  // sum 临时储存相加的值 用于辅助add
  while (l1 || l2) { // 进入循环
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add; // add 表示进位
    left.next = new ListNode(sum % 10); // 取余
    left = left.next; // 指针前进
    add = sum >= 10 ? 1 : 0; // 处理add
    l1 && (l1 = l1.next); // 指针前进
    l2 && (l2 = l2.next); // 指针前进
  }
  add && (left.next = new ListNode(add)); // 如果最后一位相加 大于10的话 那么要额外加一个链表元素( -> 1)
  return dummy.next; // 返回 哑节点 的next 即链表的第一位
};

logList(addTwoNumbers(getListFromArray([2, 4, 3]), getListFromArray([5, 6, 4])));

