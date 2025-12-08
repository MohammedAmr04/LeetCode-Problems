/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let mi = m - 1,
    ni = n - 1,
    k = m + n - 1;
  while (mi >= 0 && ni >= 0) {
    if (nums1[mi]! > nums2[ni]!) {
      nums1[k]! = nums1[mi]!;
      mi--;
    } else {
      nums1[k]! = nums2[ni]!;
      ni--;
    }
    k--;
  }
  while (ni >= 0) {
    nums1[k]! = nums2[ni];
    ni--;
    k--;
  }
}