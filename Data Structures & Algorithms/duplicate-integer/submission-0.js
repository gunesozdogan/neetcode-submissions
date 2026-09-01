class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const occurences = {};

        for (let i = 0; i < nums.length; i++) {
            if (occurences[nums[i]]) {
                return true;
            } else {
                occurences[nums[i]] = 1;
            }
        }

        return false;
    }
}
