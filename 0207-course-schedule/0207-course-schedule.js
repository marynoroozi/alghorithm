/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqs = new Map()

    for([course, pre] of prerequisites){
        if(!prereqs.has(course)) prereqs.set(course, [])
        prereqs.get(course).push(pre)
    }

    const seen = new Set()

    function hasCycle(course){
        if(seen.has(course)) return true

        seen.add(course)
        for(const pre of prereqs.get(course) || []){
            if(hasCycle(pre)) return true
        }
        seen.delete(course)
        prereqs.set(course,[])
        return false
    }

    for(let course=0; course<numCourses; course++){
        if(hasCycle(course)) return false
    }
    return true
};