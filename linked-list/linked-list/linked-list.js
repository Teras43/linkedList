class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(num) {
    let newNode = new LinkedListNode(num);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  remove(num) {
    let before;
    let node = this.head;
    while (node) {
      if (node.data === num) {
        if (before !== undefined) {
          before.next = node.next;
        } else {
          this.head = undefined;
          return;
        }
      }
      before = node;
      node = node.next;
    }
  }

  find(num) {
    let node = this.head;
    while (node) {
      if (node.data === num) {
        return true;
      } else if (node.data !== num) {
        node = node.next;
      }
    }
    return false;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}