import { Node } from "node.js";

let LinkedList = () => {
    let head;
    
    function append(value) {
        let temp = head;
        if(!temp) {
            head = new Node(value);s
            return;
        }

        while (temp.nextNode) {
            temp = nextNode;
        }

        temp.nextNode = new Node(value);
    }
    
    function prepend(value) {
        head = new Node(value, head);
    }

    function size() {
        let counter = 0;
        while (temp.nextNode) {
            temp = head.nextNode;
            counter++;
        }

        return counter;
    }

    function tail() {
        let temp;
        while (head.nextNode) {
            temp = head.nextNode;
        }
        return temp;
    }

    function at(index) {
        let temp = head;
        for (let i = 0; i < index; i++) {
            if(!temp) return temp;
            temp = temp.nextNode    
        }

        return temp;
    }

    function pop() {
        let temp;
        while (head.nextNode) {
            temp = head.nextNode;
        }
        return temp;
    }

    function contains(value) {
        let temp = head;
        for (let i = 0; i < index; i++) {
            if(!temp) return temp;
            temp = temp.nextNode    
        }

        return temp;
    }
    
}