/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    for(let row=0; row<n; row++){
        // start col=row+1. unless it will swap each item two times. So, we
        // won't see the transposed matrix
        for(let col=row+1; col<n; col++){
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
        }
    }
    for(let row=0; row<n; row++){
        matrix[row].reverse()
    }
};