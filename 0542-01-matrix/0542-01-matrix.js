/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length
    const n = mat[0].length

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j] !==0){
                mat[i][j]=Infinity
            }
        }
    }
    for(let i = 0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i>0) mat[i][j] = Math.min(mat[i][j], mat[i-1][j]+1)
            if(j>0) mat[i][j] = Math.min(mat[i][j], mat[i][j-1]+1)
        }
    }
    
    for(let i = m-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            if(i<m-1) mat[i][j] = Math.min(mat[i][j], mat[i+1][j]+1)
            if(j<n-1) mat[i][j] = Math.min(mat[i][j], mat[i][j+1]+1)
        }
    }
    return mat;
};

// mat (m*n) 3*4
// [0 1 1 0]           [0 1 1 0]       [0     inf   inf   0]
// [1 1 0 1]   =>      [1 1 0 1]       [inf   inf    0  inf]
// [1 1 1 0]           [2 2 1 0]       [inf   inf    inf  0]

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