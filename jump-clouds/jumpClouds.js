const c = [0, 1, 0, 0, 0, 1, 0]

const jumpingOnACloud = (c) => {
  let count = 0

  const jump = (jumpArr) => {
    if (c.length === 1) return
    const leftChild = jumpArr[1]
    const rightChild = jumpArr[2]
    if (rightChild === 1) {
      jump(jumpArr.slice(0, ))
    } 
  }
  jump(c)
  return count
}

console.log(jumpingOnACloud(c))
