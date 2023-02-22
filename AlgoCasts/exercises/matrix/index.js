// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // Creating an empty array
  const matrix = [];

  // Creating nested arrays and fill them with zeros
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  let num = 1;
  let rowStart = (colStart = 0);
  let rowEnd = (colEnd = n - 1);

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Populate first row
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num++;
    }
    rowStart++;

    // Populate right column
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;

    // Populate bottom row
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = num++;
      }
      rowEnd--;
    }

    // Populate left column
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = num++;
      }
      colStart++;
    }
  }
  return matrix;
}

module.exports = matrix;
