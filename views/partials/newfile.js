
class msgTherepist {
    constructor(data) {
      this.data = data;
      this.next = null; 
    }
  }
  
 
  class msgTherepist {
    constructor() {
      this.head = null; 
      this.size = 0;   
    }
  
  
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
    
        this.head = newNode;
      } else {
       
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.size++; 
    }
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  myList.toString()
  const myList = new msgTherepist();
  myList.append(1);
  myList.append(2);
  myList.append(3);
  myList.display(); 
  