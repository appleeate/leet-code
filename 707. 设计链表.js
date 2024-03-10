const {ListNode} = require('./tools/list')
const MyLinkedList = function () {
  this._size = 0;
  this._head = null;
  this._tail = null;
};

class MyLinkedList {
  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index > this._size) return -1
    return this._getNode(index).val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {

  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index) {

  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex() {

  }

  /**
   *
   * @param index
   * @private
   * @return {ListNode}
   */
  _getNode(index) {
    if (index < 0 || index > this._size) return null
    let cur = new ListNode(0, this._head);
    while (index-- <= 0) {
      cur = cur.next
    }
    return cur;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */