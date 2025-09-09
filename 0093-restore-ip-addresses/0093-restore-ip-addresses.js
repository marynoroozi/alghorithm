/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
        const len = s.length
    if(len<4 || len>12) return []
    let res = []

    function backtrack(i, dots, currIp){
        if(dots===4 && i===len) {
            res.push(currIp.slice(0, -1)); // حذف آخرین نقطه
            return
        }
        if (dots>4) return 

        // طول segment میتونه 1 تا 3 باشه
        for(let j=0; j<Math.min(i+3, len); j++){
            let newSegment = s.slice(i,j+1)
            if(parseInt(newSegment)<256 && (newSegment.length === 1 || newSegment[0] !== '0')){
                backtrack(j+1, dots+1, currIp + newSegment + ".")
            }
        }
        
    }
    backtrack(0, 0, "")
    return res
};