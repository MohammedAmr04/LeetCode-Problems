/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWord = s.trim().split(" ");
    return lastWord[lastWord.length-1].length
};