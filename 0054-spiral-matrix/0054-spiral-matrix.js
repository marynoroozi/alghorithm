/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    let colBegin= 0, colEnd = cols-1
    let rowBegin=0, rowEnd=rows-1
    const output = []
    
    while(rowBegin<=rowEnd && colBegin<=colEnd){
        // traverse right
        for(let i=colBegin; i<=colEnd; i++){
            output.push(matrix[rowBegin][i])
        }
        rowBegin++
        // traverse bottom
        for(let i=rowBegin; i<=rowEnd; i++){
            output.push(matrix[i][colEnd])
        }
        colEnd--
        // traverse left
        if (rowBegin<=rowEnd){
            for(let i=colEnd; i>=colBegin; i--){
                output.push(matrix[rowEnd][i])
            }
            rowEnd--
        }
        // traverse up
        if(colBegin<=colEnd){
            for(let i=rowEnd; i>=rowBegin; i--){
                output.push(matrix[i][colBegin])
            }
            colBegin++
        }
    }
    return output
};