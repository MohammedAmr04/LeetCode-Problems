function minStartValue(nums: number[]): number {
  let prefixSum: number[] = new Array(nums.length + 1).fill(0);
  let diff: number;
  for (let i = 1; i < nums.length + 1; i++) {
    prefixSum[i] = prefixSum[i - 1]! + nums[i - 1]!;
    // console.log(`${i} => prefix sum => ${prefixSum[i]}`);
  }
  diff = prefixSum[0]!;
  for (let i = 1; i < nums.length + 1; i++) {
    diff = Math.min(diff, prefixSum[i]!);
  }
  if (diff >= 0) {
    return 1;
  }
  if (diff < 0) {
    return Math.abs(diff) + 1;
  }
  return 1;
}