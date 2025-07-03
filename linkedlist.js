import { Node } from "node.js";

let LinkedList = () => {
    let headNode;
    
    function append(value) {
        let temp = headNode;
        if(!temp) {
            headNode = new Node(value);
            return;
        }

        while (temp.nextNode) {
            temp = nextNode;
        }

        temp.nextNode = new Node(value);
    }
    
    function prepend(value) {
        headNode = new Node(value, headNode);
    }

    function size() {
        let counter = 0;
        while (temp.nextNode) {
            temp = headNode.nextNode;
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
        let nodeListInString;

        while (NodeList.value != null) {
            nodeListInString = nodeListInString + `(${NodeList.value}) => `
        }

        console.log(nodeListInString);
    }
}