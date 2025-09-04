/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0
    let matrix = []
    for(let char of s){
        matrix.push(new Array(s.length).fill(0))
    }
    // let matrix = Array.from({length: s.length}, () => new Array(s.length).fill(0));
    
    for(let i=0; i<s.length; i++){
        //One character length palindrom
        matrix[i][i]=1
        count++
        //Two character length palindrom
        if(i+1<s.length && s[i]===s[i+1]){
            matrix[i][i+1]=1
            count++
        }
    }
    //More than three character length palindrom
    for(let len=3; len<=s.length; len++){
        let row = 0
        let col = len-1
        for(col, row; col<s.length; col++, row++){
            if(s[col]===s[row] && matrix[row+1][col-1]===1){
                matrix[row][col]=1
                count++
            }
        }
    }

    return count;
};