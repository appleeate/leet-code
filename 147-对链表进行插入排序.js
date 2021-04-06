const {ListNode, getListFromArray, logList} = require("./tools/list");

function insertionSortList(head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let cur = head,
    prev = null,
    temp = null;

  while (cur && cur.next) {               // 扫描链表
    if (cur.val <= cur.next.val) {        // 如果当前的值比下一个小 表示正确
      cur = cur.next;                     // 继续向前走
    } else {                              // 如果出现了下一个值比当前值大
      temp = cur.next;                    // 用temp保存指针
      cur.next = cur.next.next;           // 并且删除原链表的当前元素

      prev = dummyHead;                   // prev指向原始链表
      while (prev.next.val <= temp.val) { // 如果原始链表中的下一个值 小于temp的值
        prev = prev.next                  // 继续扫描
      }
      temp.next = prev.next;              // 将temp的值插入到原始链表
      prev.next = temp;                   // 将temp的值插入到原始链表
    }
  }
  return dummyHead.next;
}

logList(insertionSortList(getListFromArray([2, 3, 1, 5])));
