/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let c = 0, res = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i + 1]) {
            c++;
            if (c == 9 && word[i] != word[i + 1]) {
                res.push(c);
                res.push(word[i])
                c = 1;
            } else if (c == 9) {
                res.push(c);
                res.push(word[i])
                c = 0;
            }
        } else {
            c++;
            res.push(c);
            res.push(word[i])
            c = 0;
        }
    }
    let comp = res.join('')
    return comp;

};
