/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = Object.create(null)
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) node[c] = Object.create(null);
      node = node[c]
    }
    node.isWord = true
  };

  help(word) {
    let node = this.root;
    for (const c of word) {
      node = node[c];
      if (!node) return null
    }
    return node
  }


  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.help(word);
    return !!node && !!node.isWord
  };

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return !!this.help(prefix)
  };
}


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app");     // 返回 true
