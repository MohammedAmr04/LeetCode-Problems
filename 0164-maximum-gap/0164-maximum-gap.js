/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if(nums.length<=1)return 0
  nums.sort((a, b) => a - b);
  let gap = 0;

  for (let i = 0; i < nums.length-1; i++){
    if (nums[i + 1] - nums[i] > gap) {
      gap = nums[i + 1] - nums[i];
    }
  }

return gap
};

