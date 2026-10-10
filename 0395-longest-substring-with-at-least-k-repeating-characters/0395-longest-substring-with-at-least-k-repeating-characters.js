
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (s.length < k) return 0;
  if (k === 1) return s.length;

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < k) {
      const left = longestSubstring(s.substring(0, i), k);
      const right = longestSubstring(s.substring(i + 1), k);

      return Math.max(left, right);
    }
  }

  return s.length;
};
