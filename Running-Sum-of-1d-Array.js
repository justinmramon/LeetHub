/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let newArray = [nums[0]]
    for (let i = 1; i < nums.length; i++){
        newArray.push(nums[i]+newArray[i-1])
    }
    return newArray
};