var CQueue = function() {
  this.arr = new Array();
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.arr.push(value)
  return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  return this.arr.shift() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */