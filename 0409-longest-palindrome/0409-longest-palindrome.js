/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let mp = new Map();
    let len=0;
    for(let c of s){
        let n = 0;
        if(mp.has(c)){
            n=mp.get(c);
            if(n%2)len+=2
        }
        mp.set(c,n+1);
    }
    return s.length > len ?len+1:len;
};