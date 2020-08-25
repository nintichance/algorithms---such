// use arr to hold the queue
// start from index 1 for convenience
// add() => push, then compare with parent iteratively
// poll() => remove the root, put the last element at the root, and compare with children iteratively => recursion
// compare() should return -1 or 1, -1 means closer to the root

class PriorityQueue {
  items = [undefined]
  
  get size() {
    return this.items.length - 1
  }

  constructor(compare) {
    this.compare = compare
  }

  _swap(i, j) {
    const items = this.items;
    [items[i], items[j]] = [items[j], items[i]]
  }

  add(item) {
    this.items.push(item)
    let index = this.items.length - 1

    // compare with parent over and over
    while (index > 1) {
      const parentIndex = Math.floor(index/2)
      if (this.compare(item, this.items[parentIndex]) < 0) {
        this._swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
    console.log('add', item, ' => ', this.items.slice(1).join(','))
  }

  poll() {
    // 1. get root
    // 2. put last item to the root
    // 3. compare root with children iteratively

    const root = this.items[1]
    this.items[1] = this.items.pop()

    let index = 1

    while (index < this.items.length) {
      const leftIndex = index * 2
      const rightIndex = index * 2 + 1

      const shouldSwapWithLeft = this.compare(this.items[leftIndex], this.items[index]) < 0
      const shouldSwapWithRight = this.compare(this.items[rightIndex], this.items[index]) < 0

      if (shouldSwapWithLeft && shouldSwapWithRight) {
        const shouldLeftBeCloserThanRight = this.compare(this.items[leftIndex], this.items[rightIndex]) < 0
        if (shouldLeftBeCloserThanRight) {
          this._swap(index, leftIndex)
          index = leftIndex
        } else {
          this._swap(index, rightIndex)
          index = rightIndex
        }
      } else if (shouldSwapWithLeft) {
        this._swap(index, leftIndex)
        index = leftIndex
      } else if (shouldSwapWithRight) {
        this._swap(index, rightIndex)
        index = rightIndex
      } else {
        break
      }
    }
    console.log('remove', root, ' => ', this.items.slice(1).join(','))
  }
}

const pq = new PriorityQueue((a, b) => b - a)
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