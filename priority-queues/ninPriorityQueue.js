class PriorityQueue {
  items = [undefined]

  get size() {
    return this.items.length - 1
  }

  constructor(compare) {
    this.compare = compare //compare method
  }

  _swap(i, j) {
    const items = this.items;
    [items[i], items[j]] = [items[j], items[i]] 
  }

  add(item) {
    this.items.push(item)
    let index = this.items.length - 1

    while (index > 1) {
      const parentIndex = Math.floor(index/2)
      if (this.compare(this.items[parentIndex], item) < 0) {
        this._swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
    console.log('add', item, ' => ', this.items.slice(1).join(','))
  }

  poll() {
    const root = this.items[1]
    this.items[1] = this.items.pop()
    const index = 1

    while (index < this.items.length) {
      const leftIndex = 2 * index 
      const rightIndex = 2 * index + 1

      const shouldSwapWithLeft = this.compare(this.items[index], this.items[leftIndex]) < 0
      const shouldSwapWithRight = this.compare(this.items[index], this.items[rightIndex]) < 0
      
      if (shouldSwapWithLeft && shouldSwapWithRight) {
        const shouldLeftBeCloser = this.compare(this.items[rightIndex], this.items[leftIndex]) < 0
        if (shouldLeftBeCloser) {
          this._swap(index, leftIndex)
        } else {
          this._swap(index, rightIndex)
        }
      } else if (shouldSwapWithLeft) {
        this._swap(index, leftIndex)
      } else if (shouldSwapWithRight) {
        this._swap(index, rightIndex)
      } else {
        break
      }
    }
    console.log('remove', root, 'from', this.items.slice(1).join(','))
    return root 
  }
}

const pq = new PriorityQueue((a, b) => a - b)
pq.add(0)
pq.add(1)
pq.add(2)
pq.add(3)
pq.add(4)
pq.add(5)
pq.add(6)
pq.poll()
pq.poll()
pq.poll()
pq.poll()
pq.poll()
pq.poll()