import { Node } from "./node.js";

export function LinkedList() {
    let headNode = null;
    
    function append(value) {
        let newNode = new Node(value);

        if(!headNode) {
            headNode = newNode;
            return;
        }

        let currentNode = headNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode;
    }
    
    function prepend(value) {
        headNode = new Node(value, headNode);
    }

    function size() {
        let count = 0;
        let current = headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    function tail() {
        if(!headNode) return null;
        let current = headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    function at(index) {
        let current = headNode;
        let i = 0;
        while (current && i < index) {
            current = current.nextNode;
            i++;
        }
        return current || null;
    }

    function pop() {
        if (!headNode.nextNode) {
            headNode = null;
            return;
        }
        
        let prev = headNode;
        let current = headNode.nextNode;
        while (current.nextNode) {
            prev = current;
            current = current.nextNode;
        }

        prev.nextNode = null;
    }

    function contains(value) {
        let current = headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }
    
    function find(value) {
        let index = 0;
        let current = headNode;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return -1;
    }

    function toString() {
        let str = '';
        let current = headNode;
        while (current) {
            str += `(${current.value}) => `;
            current = current.nextNode;
        }
        str += 'null';
        return str;
    }


    return {
        append,
        prepend,
        size,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        getHead
    };
}