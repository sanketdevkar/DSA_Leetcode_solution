
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the width between the two pointers
        const width = right - left;
        
        // The height of the water is limited by the shorter line
        const currentHeight = Math.min(height[left], height[right]);
        
        // Calculate current area and update maxWater if it's larger
        const currentWater = width * currentHeight;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};