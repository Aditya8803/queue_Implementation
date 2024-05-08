class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if (this.isEmpty()) {
        alert("Queue Underflow");
      }
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }

    print() {
        const copy = [...this.items]; 
        document.getElementById('main').innerHTML = copy.join(" ") 
      }
  }
  
  const queue = new Queue();
  let count = 0; 
  let container = document.getElementById('main');
  
const more = ()=>{
    console.log("More Requests Pressed")
    count++;
    let text = "Request " + count;
    queue.enqueue(text);
    queue.print();
} 
const serve = ()=>{
    console.log("Serve Requests Pressed")
    queue.dequeue();
    queue.print();
}
