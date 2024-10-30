/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 

    let first = strs[0];
    let size = first.length; 

    for (let i = 0; i < first.length; i++) {
        for (let x = 1; x < strs.length; x++) { 
            if (first[i] !== strs[x][i]) {
                size = i; 
                return first.substring(0, size);
            }
        }
    }

    return first.substring(0, size);
};
