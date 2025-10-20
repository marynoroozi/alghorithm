/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 const binarySearch = (arr,x) =>{
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]===x) return mid
        if(arr[mid]<x){
            low = mid+1
        } else {
            high = mid -1
        }
    }
    return low
 }
var findClosestElements = function(arr, k, x) {
    const n = arr.length
    if(k>n) return arr
    if(x<arr[0]) return arr.slice(0,k)
    if(x>arr[n-1]) return arr.slice(n-k)

    const firstClosest = binarySearch(arr, x)

    let leftIdx = firstClosest - 1      // index before starting our window
    let rightIdx = firstClosest         // index after ending our window

    // Our window size < k
    while( rightIdx - leftIdx - 1 < k){
        if(leftIdx < 0){
            rightIdx++
            continue
        }
        if(rightIdx>=n){
            leftIdx--
            continue
        }
        let leftDiff = Math.abs(x-arr[leftIdx])
        let rightDiff = Math.abs(x-arr[rightIdx])
        if(leftDiff <= rightDiff) leftIdx--
        else rightIdx++
    }
    return arr.slice(leftIdx+1, rightIdx)
};