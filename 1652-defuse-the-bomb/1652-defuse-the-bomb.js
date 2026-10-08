/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  let n = code.length;
  code = code.concat(code)
    let res = new Array(n).fill(0);
    if (k === 0) return res;
    if (k > 0) {
      for (let i = 0; i < n; i++) {
        let slice = code.slice(i + 1, i + k + 1)
        res[i] = slice.reduce((p, c) => p += c);
        
      }
      return res
  }
if (k < 0) {
  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = 1; j <= Math.abs(k); j++) {
      sum += code[(i - j + n) % n];
    }

    res[i] = sum;
  }

  return res;
}
};