class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            let left = i + 1;
            let right = sorted.length - 1;

            while (left < right) {
                if (sorted[i] + sorted[left] + sorted[right] > 0) {
                    right += -1;
                } else if (sorted[i] + sorted[left] + sorted[right] < 0) {
                    left += 1;
                } else {
                    result.push([sorted[i], sorted[left], sorted[right]]);
                    left += 1;
                    right -= 1;
                    while (sorted[left] === sorted[left - 1]) left++;
                    while (sorted[right] === sorted[right + 1]) right--;
                }
            }
        }

        return result;
    }
}
