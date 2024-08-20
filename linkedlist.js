
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null

//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }


//     append(value){
//         // console.log("reaching append")
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node;
//             // console.log("reaching append 1")
//         } else {
//             let current = this.head;
//             while(current.next){
//                 current = current.next
//             }

//             current.next = node;
//         }
//         this.size++
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log(`The list is empty`)
//         } else {
//             let curr = this.head;
//             let listValues= '';
//             while(curr){
//                 listValues +=`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)

//         }
//     }
// }

// const list = new LinkedList();

// console.log('List is empty', list.isEmpty())
// console.log('List size', list.getSize());
// // list.print()
// // list.prepend(10)
// // list.print()
// // list.prepend(20)
// // list.prepend(30)
// list.print()
// list.append(40)
// list.print()



class SNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    prepend(value){
        const node = new SNode(value);

        if(this.head == null){
            this.head = node;
        } else{
            //console.log("this.head: ",this.head,"node.next: ",node.next,"Node: ", node)
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
}


const list = new SLinkedList();
list.prepend(1)
list.prepend(2)
list.prepend(3)
// console.log(list);