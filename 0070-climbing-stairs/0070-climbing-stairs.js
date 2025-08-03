/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
if (n === 0 || n === 1) return 1;

  let a = 1; // f(0)
  let b = 1; // f(1)

  for (let i = 2; i <= n; i++) {
    let temp = a + b; // f(n) = f(n-1) + f(n-2)
    a = b;
    b = temp;
  }

  return b;  
};
