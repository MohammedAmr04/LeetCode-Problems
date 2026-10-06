/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
    let key = nums[i];
    if (map.has(key)) {
      map.set(key, [...map.get(key), i]);
    } else {
      map.set(key, [i]);
    }
  }
  // console.log(map)
  for (let [key, values] of map) {
    if (values.length > 1) {
      for (let i = 0; i < values.length-1;i++){
        let abs = Math.abs(values[i] - values[i+1]);
        if (abs <= k) {
          return true
        }
      }
    }
  }

  return false 

};
