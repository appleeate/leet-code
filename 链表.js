// 节点
class Node {
	constructor(element) {
		this.element = element;// 当前节点的数据
		this.next = null;
	}
}

// 单项链表
class LList {
	constructor() {
		this.head = new Node('head')
	}

	// 查找某一个节点
	find(item) {
		let currNode = this.head;
		while (currNode.element !== item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	// 向某一个元素后面插入新的节点
	insert(newElement, item) {
		let newNode = new Node(newElement);
		let current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
	}

	// 查找某一节点的前一个节点(前驱)
	findPrevious(item) {
		let currentNode = this.head;
		while(!(currentNode.next === null) && (currentNode.next.element !== item)) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	// 删除某一个节点
	remove(item) {
		let prevNode = this.findPrevious(item);
		if (!(prevNode.next === null)) {
			prevNode.next = prevNode.next.next;
		}
	}

	// 修改某一个节点的数据
	edit(item, newItem) {
		let element = this.find(item);
		element.element = newItem;
	}

	// 在控制台打印出所有的节点(方便预览)
	display() {
		let currNode = this.head;
		while (!(currNode.next === null)) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}

let names = new LList();
names.insert('zhang', 'head');
names.insert('xu', 'zhang');
names.insert('dong', 'xu');
names.insert('shuai', 'dong');
names.remove('head');
names.display();

console.log(names.find('dong').next);

module.exports = Node;


