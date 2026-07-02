/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Edge case: If numRows is 1 or greater than the string length, no zigzag is possible
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Initialize an array of strings for each row
    const rows = new Array(Math.min(numRows, s.length)).fill("");
    let currentRow = 0;
    let goingDown = false;

    // Iterate through each character in the string
    for (const char of s) {
        rows[currentRow] += char;

        // Turn around if we reach the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move up or down based on the direction
        currentRow += goingDown ? 1 : -1;
    }

    // Join all the rows together to get the final result
    return rows.join("");
};