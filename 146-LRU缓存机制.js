/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
	this.capactiy = capacity;
	this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	let val = this.map.get(key);
	if (typeof val === 'undefined') return -1;
	this.map.delete(key);
	this.map.set(key, val);
	return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.map.has(key)) this.map.delete(key);
	this.map.set(key, value);
	let keys = this.map.keys();
	while (this.map.size > this.capactiy) {
		this.map.delete(this.map.delete(keys.next().value))
	}
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
