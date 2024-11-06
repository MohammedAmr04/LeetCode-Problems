/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c=0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[c]){
            c++;
            nums[c]=nums[i];
        }
    }

    return c+1;
    
};