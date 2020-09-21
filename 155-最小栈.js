/**
 * initialize your data structure here.
 */
const MinStack = function () {
	this.stack = [];
	this.min = undefined;
	//辅助栈
	// this.minStack = [Infinity]
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.stack.push(x);
	this.min = Math.min(...this.stack)
	//辅助栈
	// this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
	this.min = Math.min(...this.stack)
	//辅助栈
	// this.minStack.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min;
	//辅助栈
	// return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
minStack.push(-3);
minStack.push(2);
console.log(minStack.getMin());
console.log(minStack.top());
