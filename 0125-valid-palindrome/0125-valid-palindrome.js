/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (s.length === 0) return true;
    let result = true
    for (let i = 0, j = s.length - 1; i < s.length; i++, j--){
        if (i === j) break;
        if (s[i] != s[j]) {
            result = false;
            break;
        }
    }

    return result

};