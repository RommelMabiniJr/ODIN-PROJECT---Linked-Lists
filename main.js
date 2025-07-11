import { LinkedList } from "./linkedlist_v2.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("capybarra")


console.log(list.toString());
// console.log(list.size())