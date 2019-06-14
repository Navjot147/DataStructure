function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  _insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) root.left = newNode;
      else this._insertNode(root.left, newNode);
    } else if (newNode.value > root.value) {
      if (!root.right) root.right = newNode;
      else this._insertNode(root.right, newNode);
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else this._insertNode(this.root, newNode);
  }

  bfs() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const currentNode = queue[0];
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      queue.shift();
    }
  }
  preorder() {
    const stack = [];
    stack.push(this.root);
    while (stack.length) {
      const currentNode = stack.pop();
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      console.log(currentNode.value);
    }
  }
  postorder(root) {
    if (!root) return;
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.value);
  }
}
 


const objBinaryTree = new BinaryTree(5);
objBinaryTree.insert(3);
objBinaryTree.insert(12);
objBinaryTree.insert(2);
objBinaryTree.insert(4);
objBinaryTree.insert(9);
objBinaryTree.insert(14);
// objBinaryTree.preorder();
objBinaryTree.postorder(objBinaryTree.root);
