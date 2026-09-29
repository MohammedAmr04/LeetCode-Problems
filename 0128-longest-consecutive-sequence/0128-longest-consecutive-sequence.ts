function longestConsecutive(nums: number[]): number {

  let a = [...new Set(nums.sort((a, b) => a - b))];
          if (a.length === 1) return 1;

    let n = 0, step = 0;
    for (let i = 0; i < a.length-1; i++){
        if (a[i + 1] - a[i] === 1) {
            step++;
        }
        if (a[i + 1] - a[i] != 1) {
            step=0
        }
      
            n = Math.max(n, step+1)

            
    }
    return n
};