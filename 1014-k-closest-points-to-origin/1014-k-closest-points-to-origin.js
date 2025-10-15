/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if(k===0) return
    if(points.length <=1 || points.length===k) return points
    
    // Don't forget to include compare for the heaps
    const maxHeap = new MaxPriorityQueue({compare:(a,b)=> a[0]-b[0]})
    for(let point of points){
      const distance = Math.sqrt(Math.pow((point[0]-0),2) + Math.pow((point[1]-0),2))
      if(maxHeap.size() < k){
        maxHeap.enqueue([distance, point[0], point[1]])
      } else{
        if(maxHeap.front()[0]>distance){
        maxHeap.dequeue()
        maxHeap.enqueue([distance, point[0], point[1]])
        }
      }
    }

    let output = []
    for(let i=0; i<Math.min(k, points.length); i++){
      let [distance, x, y] = maxHeap.pop()
      output.push([x,y])
    }
    return output;
};