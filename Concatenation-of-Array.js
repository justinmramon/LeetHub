/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    let ans=[...nums]
    for (let i = 0; i < nums.length; i++) {
        ans=[...ans, nums[i]]
    }
    return ans
};