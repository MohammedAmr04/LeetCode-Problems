    /**
    * @param {string} s
    * @return {string}
    */
var reverseWords = function(s) {
    s = s.split(" ").filter((a)=>a!=="").map((a) => (a.trim())).reverse().join(" ")
    return s.trim();
};