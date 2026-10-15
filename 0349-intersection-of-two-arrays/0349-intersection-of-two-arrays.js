/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  let len = Math.min(set1.size, set2.size);
  let nums = len === set1.size ? [...set1] : [...set2]
  for (let i = 0; i < len; i++){
    if(set1.has(nums[i])&& set2.has(nums[i])) result.push(nums[i])
  }
  return result
};