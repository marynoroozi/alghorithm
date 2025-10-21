/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const inDegree = Array(numCourses).fill(0)  // تعداد پیش‌نیاز برای هر درس
    const adjList = new Map()                      // گراف برای نگهداری روابط

    // گراف و inDegree رو می‌سازیم
    for(let [a,b] of prerequisites){
        inDegree[a]++                           // چون a باید بعد از b انجام بشه
        if(!adjList.has(b)) adjList.set(b,[])
        adjList.get(b).push(a)
    }

    const queue = []                         // صف برای درس‌هایی که پیش‌نیاز ندارن
    for(let i=0; i<numCourses; i++){
        if(inDegree[i]===0) queue.push(i)
    }

    let count = 0                        // شمارنده‌ی درس‌هایی که تونستیم بگذرونیم
     // الگوریتم BFS
    while(queue.length){
        const course = queue.shift()
        count++
        // برای هر درسی که به این درس وابسته است:
        if(adjList.has(course)){
            for(let next of adjList.get(course)){
                inDegree[next]--                     // یکی از پیش‌نیازهاش حذف شد
                if(inDegree[next]===0) queue.push(next)
            }
        }
    }
    return count === numCourses              // اگه همه‌ی درس‌ها گذرونده شدن، true
};