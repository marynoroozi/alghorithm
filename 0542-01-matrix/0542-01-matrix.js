/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length
    const n = mat[0].length
    let queue= []
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j]===0){
                queue.push([i,j])
            } else{
                mat[i][j]=Infinity
            }
        }
    }
    
    while(queue.length){
        const cell = queue.shift() //[0,0]
        const row = cell[0]
        const col = cell[1]
        const checkList = [[row-1, col], [row+1, col], [row, col-1], [row, col+1]] 
        for(let item of checkList){
            if(item[0]>=0 && item[0]<m && item[1]>=0 && item[1]<n && mat[item[0]][item[1]]> mat[row][col]){
                mat[item[0]][item[1]] = mat[row][col] + 1
                queue.push([item[0], item[1]])
            }
        }
    }
    
    return mat;
};

// for(m[i][j]){
//     if(m[i][j]===0) {
//         m[i][j]=0
//     } else if(m[i][j] !=0){
//         if(m[i-1][j]===0 || m[i][j-1]===0){
//             m[i][j]=1
//         } else {
//             m[i][j] = Infinity
//         }
//     }
// }

// for(m[i][j]){
//     if(m[i][j] === Infinity){
//         const min = Math.min(m[i-1][j], m[i+1][j], m[i][j-1], m[i][j+1])
//         m[i][j] = min + 1
//     }
// }