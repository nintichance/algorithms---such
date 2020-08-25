// Direction Vectors helps to find
// neighboring cells
// define the direction vectors for 
// north, south, east, west
// dr =  [-1, +1, 0, 0]
// dc =  [0, 0, -1, +1]


const getNeighbors = (row, col) => {
  // we need to get num of rows & cols from the grid
  const numOfCols = 3
  const numOfRows = 4
  const rowNeighbors =  [-1, +1, 0, 0]
  const colNeighbors =  [0, 0, -1, +1]

  for (let i = 0; i < 4; i++) {
    const neighborRow = row + rowNeighbors[i]
    const neighborCol = col + colNeighbors[i]

    // skip invalid, out of bounds cells
    if (neighborRow < 0 || neighborCol < 0) {
      continue
    }

    if (neighborRow >= numOfRows || neighborCol >= numOfCols) {
      continue
    }
  }
}