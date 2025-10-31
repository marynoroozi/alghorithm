/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let output = new Map()
    for(let str of strs){
        const sortedStr = Array.from(str).sort().join("")
        if(!output.has(sortedStr)){
            output.set(sortedStr,[])
        }
        output.get(sortedStr).push(str)
    }
    const res = Array.from(output.values())
    return res
};