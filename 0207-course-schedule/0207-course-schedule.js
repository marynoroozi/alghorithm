/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqs = new Map()

    // ساخت گراف از پیش‌نیازها
    for([course, pre] of prerequisites){
        if(!prereqs.has(course)) prereqs.set(course, [])
        prereqs.get(course).push(pre)
    }

    const seen = new Set()

    function hasCycle(course){
        // اگر در مسیر فعلی هست → چرخه داریم
        if(seen.has(course)) return true

        seen.add(course)
        for(const pre of prereqs.get(course) || []){
            if(hasCycle(pre)) return true
        }
        seen.delete(course)
        prereqs.set(course,[])   // پاکسازی همه پیش نیازها 
        return false
    }

    // بررسی همه‌ی کورس‌ها
    for(let course=0; course<numCourses; course++){
        if(hasCycle(course)) return false
    }
    return true
};