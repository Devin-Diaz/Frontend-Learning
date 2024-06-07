
const _fields = new WeakMap();

class Stack {
    constructor() {
        _fields.set(this, []);
    }

    push(element) {
        _fields.get(this).push(element);
    }

    pop() {
        if (this.size() === 0) throw new Error('Stack is empty!');
        return _fields.get(this).pop();
    }

    peek() {
        if (this.size() === 0) throw new Error('Stack is empty!');
        const s = _fields.get(this);
        return s[s.length - 1];
    }

    size() {
        return _fields.get(this).length;
    }

    // Method to view the internal array (for debugging purposes)
    debugPrint() {
        return _fields.get(this).slice(); // slice to copy the array to avoid direct manipulation
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.debugPrint()); // This will print the array [1, 2, 3]