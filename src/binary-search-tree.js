const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


class BinarySearchTree {
    constructor() {
        this.roots = null;
    }

    root() {
        return this.roots;
    }

    add(data) {
        this.roots = addWithin(this.roots, data)

        function addWithin(node, data) {
            if (!node) {
                return new Node(data)
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addWithin(node.left, data)
            } else {
                node.right = addWithin(node.right, data)
            }
            return node;
        }
    }

    has(data) {
        return searchWithin(this.roots, data)

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }
            if (node.data === data) {
                return true;
            }
            if (data < node.data) {
                return searchWithin(node.left, data)
            } else {
                return searchWithin(node.right, data)
            }
        }
    }

    find(data) {
        return findWithin(this.roots, data)

        function findWithin(node, data) {
            if (!node) {
                return null;
            }
            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                return findWithin(node.left, data)
            } else {
                return findWithin(node.right, data)
            }
        }
    }

    remove(data) {

        this.roots = removeNode(this.roots, data)

        function removeNode(node, data) {
            if (!node) {
                return null;
            }
            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }
                if (!node.right) {
                    node = node.left;
                    return node;
                }
                let minFromRirht = node.right
                while (minFromRirht.left) {
                    minFromRirht = minFromRirht.left
                }
                node.data = minFromRirht.data;
                node.right = removeNode(node.right, minFromRirht.data);
                return node;
            }
        }
    }

    min() {
        if (!this.roots) {
            return;
        }
        let node = this.roots;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.roots) {
            return;
        }
        let node = this.roots;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};