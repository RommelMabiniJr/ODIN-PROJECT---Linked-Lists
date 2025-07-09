import { Node } from "./node.js";

export function LinkedList() {
    let headNode;

    function _baseAppendRecursion(value, currentNode) {
        if(currentNode == null) {
            return new Node(value)
        }

        currentNode.nextNode = _baseAppendRecursion(value, currentNode.nextNode)
        return currentNode;
    }
    
    function append(value) {
        let temp = headNode;

        if(temp === undefined) {
            headNode = new Node(value);
            return;
        }

        headNode = _baseAppendRecursion(value, temp)
    }
    
    function prepend(value) {
        headNode = new Node(value, headNode);
    }

    function size() {
        let temp = headNode;
        let counter = 0;
        while (temp) {
            temp = temp.nextNode;
            counter++;
        }

        return counter;
    }

    function tail() {
        let temp;
        while (headNode.nextNode) {
            temp = headNode.nextNode;
        }
        return temp;
    }

    function at(index) {
        let temp = headNode;
        for (let i = 0; i < index; i++) {
            if(!temp) return temp;
            temp = temp.nextNode;
        }

        return temp;
    }

    function pop() {
        let temp;
        while (headNode.nextNode) {
            temp = headNode.nextNode;
        }
        return temp;
    }

    function contains(value) {
        let temp = headNode;
        for (let i = 0; i < index; i++) {
            if(!temp) return temp;
            temp = temp.nextNode    
        }

        return temp;
    }
    
    function find(value) {
        let index = 0;
        let tempNode = headNode;

        do {
            if (tempNode.value == value) return index;
            index++;
            tempNode = tempNode.nextNode;

        } while (tempNode != null);

        return tempNode;
    }

    function toString() {
        let nodeListInString = "";
        let tempNode = headNode;

        while (tempNode) {
            nodeListInString +=  `(${tempNode.value}) => `;
            tempNode = tempNode.nextNode
        }
        
        console.log(nodeListInString);
    }


    return {
        append,
        prepend,
        size,
        toString,
        headNode
    }
}