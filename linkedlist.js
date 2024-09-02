class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++
    }
    append(value) {
        const node = new Node(value);
        current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node;
        this.size++
    }

    print() {
        if(!this.head) return "List is empty"

        let current = this.head;
        let listValues = '';

        while(current){
            listValues += current.value + " ";
            current = current.next
        }
        console.log(listValues)
    }


    printReverse() {
        if(!this.head) return "List is empty"

        let stack = [];
        let current = this.head;

        while(current) {
            stack.push(current.value);
            current = current.next;
        }

        let reversedList = '';
        
        while(stack.length) {
            reversedList += stack.pop() + " ";
        }

        console.log(reversedList);
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;
    
        while (fast !== null && fast.next !== null) {
            slow = slow.next;        // Moves one step
            fast = fast.next.next;   // Moves two steps
        }
    
        return slow.value; // slow now points to the middle node
    }
    
    removeDuplicates() {
        if (this.head === null) {
            return; // List is empty
        }

        let current = this.head;

        while (current !== null && current.next !== null) {
            if (current.value === current.next.value) {
                // Skip the next node
                current.next = current.next.next;
                this.size--;
            } else {
                current = current.next;
            }
        }
    }

    arrayToList(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Input must be an array");
        }
        
        // Clear the list if it has any elements
        this.head = null;
        this.size = 0;

        for (const value of arr) {
            this.append(value);
        }
    }

    sum() {
        let current = this.head;
        let total = 0;

        while (current !== null) {
            total += current.value;
            current = current.next;
        }

        return total;
    }


    removeOddNumbers() {
        // Handle the case where the head node is odd
        while (this.head !== null && this.head.value % 2 !== 0) {
            this.head = this.head.next;
            this.size--;
        }

        let current = this.head;

        // Traverse the rest of the list
        while (current !== null && current.next !== null) {
            if (current.next.value % 2 !== 0) {
                // Remove the odd node
                current.next = current.next.next;
                this.size--;
            } else {
                // Move to the next node
                current = current.next;
            }
        }
    }


}


const list = new SinglyLinkedList();
list.prepend(5)
list.prepend(6)
list.prepend(7)
list.prepend(8)
list.prepend(9)
list.prepend(10)
list.prepend(11)
list.prepend(12)
list.prepend(13)
list.removeOddNumbers()
 list.print();
//console.log(list.findMiddle())
