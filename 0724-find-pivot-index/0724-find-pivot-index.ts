function pivotIndex(nums: number[]): number {
  let prefixSum: number[] = new Array(nums.length + 1).fill(0);
  let index: number = -1;
  for (let i = 1; i < nums.length + 1; i++) {
    prefixSum[i] = prefixSum[i - 1]! + nums[i - 1]!;
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (prefixSum[i - 1] === prefixSum[nums.length]! - prefixSum[i]!) {
      index = i;
      break;
    }
  }
  return index > 0 ? index - 1 : -1;
}