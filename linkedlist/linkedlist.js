function Node(data, nextValue) {
    this._data = data;
    this._nextAdd = nextValue;
}

class LinkedList {
    constructor(value) {
        let node = new Node(value, null);
        this.head = node;
        this.length = 1;
        this._currentValue = '';
    }

    _findNull(obj) {
        if (obj._nextAdd != null) {
            this._findNull(obj._nextAdd);
        } else {
            this._currentValue = obj;
        }
    }

    addAtEnd(value) {
        let node = new Node(value, null);
        this._findNull(this.head);
        this._currentValue._nextAdd = node;
        this.length++;
    }

    addToHead(value) {
        let node = new Node(value, null);
        const currentHead = this.head;
        node._nextAdd = currentHead;
        this.head = node;
        this.length++;
    }

    addAtIndex(index, value) {
        if (index > this.length - 1) {
            throw "index out of bound";
        }
        let node = new Node(value, null);
        if (!index) {
            let currentHead = this.head;
            this.head = node;
            node._nextAdd = currentHead;
        } else {
            let currentHead = this.head;
            let previousNode = null;
            for (let i = 0; i < index; i++) {
                previousNode = currentHead;
                currentHead = currentHead._nextAdd;
            }

            node._nextAdd = currentHead;
            previousNode._nextAdd = node;
            this.length++;
        }
    }

    findAndGet(val) {
        if (!this.length) {
            return undefined;
        }
        let head = this.head;
        var index = 0;
        while (head) {
            index++;
            if (head._data == val) {
                break;
            }
            head = head._nextAdd;
        }
        return head ? { index, head } : null;
    }

    findMiddle() {
        let middleIndex = parseInt(this.length / 2) + 1;
        let middle = this.head;
        for (let i = 0; i < middleIndex; i++) {
            if (middleIndex == 1) {
                return;
            }
            middle = middle._nextAdd;
        }

        return middle;
    }

    removeFromHead() {
        this.head = this.head._nextAdd;
        this.length--;
    }

    remove(val) {
        let currentHead = this.head._nextAdd;
        let previousNode = this.head;
        if (this.head._data === val) {
            this.removeFromHead();
            return this;
        }

        while (currentHead) {
            if (currentHead._data == val) {
                break;
            }

            previousNode = currentHead;
            currentHead = currentHead._nextAdd;
        }
        previousNode._nextAdd = currentHead._nextAdd;
        this.length--;
    }
}


const linkedList = new LinkedList(4);
linkedList.addAtEnd(6);
linkedList.addAtEnd(7);
linkedList.addToHead(8);
linkedList.addAtIndex(2, 21);
// linkedList.remove(8);
console.log(JSON.stringify(linkedList.head));
console.log(linkedList.findMiddle());

