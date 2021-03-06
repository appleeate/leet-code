/**
 * Initialize your data structure here.
 */
const RandomizedSet = function() {
  this.set = new Set();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) return false;
  this.set.add(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.set.has(val)) return false;
  this.set.delete(val);
  return true;

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const random = parseInt(Math.random() * (this.set.size));
  return [...this.set][random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


// 使用类进行重写

class RandomizedSetClass {
  constructor() {
    this.set = new Set();
  }

  insert(val) {
    if(!this.set.has(val)) return false;
    this.set.add(val);
    return true;
  }

  remove(val) {
    if(!this.set.has(val)) return false;
    this.set.delete(vale);
    return true;
  }

  getRandom() {
    const random = parseInt(Math.random() * (this.set.size));
    return [...this.set][random];
  }
}