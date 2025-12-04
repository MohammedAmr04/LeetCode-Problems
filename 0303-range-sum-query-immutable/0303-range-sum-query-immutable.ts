class NumArray {
  private prefixSums: number[];
  constructor(nums: readonly number[]) {
    if (nums.length === 0) {
      this.prefixSums = [];
      return;
    }
    this.prefixSums = new Array(nums.length + 1).fill(0);
    this.prefixSums[0] = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === undefined) continue;
      this.prefixSums[i + 1] = this.prefixSums[i]! + nums[i]!;
    }
  }

    sumRange(left: number, right: number): number {
      
    return this.prefixSums[right + 1]! - this.prefixSums[left]!;
  }
}