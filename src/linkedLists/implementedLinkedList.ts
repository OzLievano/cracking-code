type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>; 

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    // we need to effectively add a node to the beginning of the linkedList
    this.length++;
    //is there a head?
    const newNode = {value : item} as Node<T>;
    if(!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    // if there is a head
    // we need to make the current head the tail
    // the new node the head and point next to tail
    this.head = newNode;
    newNode.next = this.head;
  }
  
  insertAt(item: T, idx: number): void {
    this.length++;
    let curr = this.get(idx);
    if(idx > this.length){
      return console.error('out of bounds');
      ;
    }
    const newNode = {value: item} as Node<T>;

    newNode.next = curr
    curr = newNode;
  }

  append(item: T): void {
    // adding to the tail 
    this.length++;
    const newNode = {value: item} as Node<T>;
    if(!this.tail) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  remove(item: T): T | undefined {
    // effectively what we needs to be here is that 
    // we need to remove the pointers to this node
    this.length--;
    // 
    if(this.length === 0){
      // we have removed the head;
      const nodeToRemove = this.head?.value;
      this.head = this.tail = undefined;
      return nodeToRemove;
    }
    
    let curr = this.head;

    if(curr?.value === item){
      curr = curr.next;
      return curr?.value;
    }

    while(curr?.next) {
      if(curr.next.value === item) {
        curr.next = curr.next.next;
      }

      curr = curr.next;

      return curr?.value;
    }


  }

  get(idx: number): Node<T> | undefined {
    let curr = this.head;
    for(let i = 0; curr && i < idx; i++){
      curr = curr.next;
    }

    return curr;
  }

  // removeAt(idx: number): T | undefined {

  // }

}