class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val, curr = this.root) {
    //if empty, insert at root
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    //else, insert new node at correct spot
    while (true) {
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new Node(val)
          return this
        } else {
          curr = curr.left
        }
      } else if (val > curr.val) {
        if (curr.right === null) {
          curr.right = new Node(val)
          return this
        } else {
          curr = curr.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr = this.root) {
    //if empty, insert at root
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new Node(val)
          return this
        }
        return this.insertRecursively(val, curr.left)
      } else {
        if (curr.right === null) {
          curr.right = new Node(val)
          return this
        }
        return this.insertRecursively(val, curr.right)
      
      }
      
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root
    let found = false

    if (val === currNode.val) return currNode

    while (currNode && !found) {
      if (val < currNode.val) {
        curr = currNode.left
      } else if ( val > currNode.val) {
        currNode = currNode.right
      } else {
        found = true 
      }
    }

    if (!found) return undefined
    return currNode
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {
    if(this.root===null) return undefined

    if (val < curr.val) {
      if (curr.left === null) return undefined
      return this.findRecursively(val, curr.left)
    } else if (val > curr.val) {
      if (curr.right === null) return undefined
      return this.findRecursively(val, curr.right)
    }
    return curr
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = []
    let curr = this.root

    function traverse(node) {
      data.push(node.val) //visited node
      node.left && traverse(node.left) //go left if there is a left
      node.right && traverse(node.right) //go right if there is a right
    }

    traverse(curr)
    return data 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = []
    let curr = this.root

    function traverse(node) {
      node.left && traverse(node.left) //go left if there is a left
      data.push(node.val) //visited node
      node.right && traverse(node.right) //go right if there is a right
    }

    traverse(curr)
    return data
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = []
    let curr = this.root

    function traverse(node) {
      node.left && traverse(node.left) //go left if there is a left
      node.right && traverse(node.right) //go right if there is a right
      data.push(node.val) //visited node
    }
    traverse(curr)
    return data 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let queue = []
    let data = []

    queue.push(node)

    while(queue.length) {
      node = queue.shift()
      data.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    return data 
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
