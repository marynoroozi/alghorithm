/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = Array(numCourses).fill(0)  // تعداد پیش نیازهای دروس
    const adjList = new Map()                   // لیست درسهای بعدی که هر درس پیش نیازش است

    for(const [course, pre] of prerequisites){
        inDegree[course]++
        if(!adjList.has(pre)) adjList.set(pre, [])
        adjList.get(pre).push(course)
    }

    let queue = []
    for(let course=0; course<numCourses; course++){
        if(inDegree[course] === 0) queue.push(course)
    }

    let courseOrder = []
    while(queue.length){
        const course = queue.shift()
        courseOrder.push(course)

        for(let next of adjList.get(course) || []){
            inDegree[next]--
            if(inDegree[next]===0) queue.push(next)
        }
    }

    return courseOrder.length === numCourses ? courseOrder : []
};