/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let left = 0, right = height.length - 1;
  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let ar = h * width;
    if (ar > area) {
      area = ar;
    } 
      if (height[left] > height[right]) {
        right--;
      } else left++;
    
  }
  return area;
};