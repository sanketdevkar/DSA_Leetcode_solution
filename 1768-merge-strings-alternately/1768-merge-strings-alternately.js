/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = [];
    let i = 0, j = 0;

    // Loop through both strings alternatingly until one runs out
    while (i < word1.length && j < word2.length) {
        result.push(word1[i]);
        result.push(word2[j]);
        i++;
        j++;
    }

    // Append the remaining characters from word1, if any
    if (i < word1.length) {
        result.push(word1.slice(i));
    }

    // Append the remaining characters from word2, if any
    if (j < word2.length) {
        result.push(word2.slice(j));
    }

    // Join the array into a single string
    return result.join('');
};