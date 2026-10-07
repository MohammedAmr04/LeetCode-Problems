/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sumArray = [0]
  for (let i = 0; i < nums.length;i++) {
    sumArray.push(sumArray[i] + nums[i]);
  }
let max=[]
  for (let i = 1; i < nums.length + 1; i++){
    if (i + k - 1 < nums.length + 1) {
      max.push((sumArray[i + k - 1] - sumArray[i-1]) / k);
    }
  }
  max.sort((a, b) => b - a)
  
  return max[0]
};
