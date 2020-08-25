class Queue {
  constructor() {
    this.storage = {}
    this.tail = 0
    this.head = 0
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
  }

  dequeue() {
    const dequeued = this.queue[this.head]
    delete this.queue[this.head]
    this.head++
    return dequeued
  }
}