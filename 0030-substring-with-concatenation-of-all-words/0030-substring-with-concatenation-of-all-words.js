var findSubstring = function (s, words) {
    const result = [];

    const wordLength = words[0].length;
    const wordCount = words.length;
    const substringSize = wordLength * wordCount;

    // Count how many times each word should appear
    const target = new Map();

    for (const word of words) {
        target.set(word, (target.get(word) || 0) + 1);
    }

    // Try every possible starting offset
    for (let offset = 0; offset < wordLength; offset++) {
        let left = offset;
        let right = offset;

        const seen = new Map();
        let count = 0;

        while (right + wordLength <= s.length) {
            const word = s.substring(right, right + wordLength);
            right += wordLength;

            // Word is not in words
            if (!target.has(word)) {
                seen.clear();
                count = 0;
                left = right;
                continue;
            }

            // Add word to current window
            seen.set(word, (seen.get(word) || 0) + 1);
            count++;

            // Too many copies of this word
            while (seen.get(word) > target.get(word)) {
                const leftWord = s.substring(left, left + wordLength);

                seen.set(leftWord, seen.get(leftWord) - 1);

                left += wordLength;
                count--;
            }

            // We found all words
            if (count === wordCount) {
                result.push(left);

                // Move window forward
                const leftWord = s.substring(left, left + wordLength);

                seen.set(leftWord, seen.get(leftWord) - 1);

                left += wordLength;
                count--;
            }
        }
    }

    return result;
};