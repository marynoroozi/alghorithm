//Finding Pivot of an array

let total = sum of array
let leftSum = 0

for i in array:
    if leftSum == total - leftSum - nums[i]:
        return i
    leftSum += nums[i]

return -1
