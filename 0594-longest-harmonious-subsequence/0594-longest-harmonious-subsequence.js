/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b);
  let map = new Map();
  let max = [];
  for(let num of nums) {
    if (map.has(num)) {
      map.set(num,map.get(num)+1)
    }else map.set(num,1)
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = Math.abs(nums[i + 1] - nums[i])
    if ( sum === 1) {
      max.push(map.get(nums[i])+map.get(nums[i+1]))
    }
  }
  max.sort((a, b) => b - a);

  return max.length ===0? 0 : max[0]
};
