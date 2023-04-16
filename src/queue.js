const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }


    getUnderlyingList() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.first;
    }

    enqueue(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let oldLast = this.last;
        this.last = new QueueNode(value)
        if (this.first == null) {
            this.first = this.last;
        } else {
            oldLast.next = this.last;
        }
        this.length++;
    }

    dequeue() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (this.first == null) {
            this.last = null;
            return null;
        }
        let itemValue = this.first.value;
        this.first = this.first.next;
        this.length--
            return itemValue;
    }
}

module.exports = {
    Queue
};