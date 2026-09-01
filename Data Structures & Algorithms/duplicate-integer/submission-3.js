class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set();
        let isDublicate = false;

        for (let i = 0; i < nums.length; i++) {
            if (mySet.has(nums[i])) {
                return true;
            } else {
                mySet.add(nums[i])
            }
        }

        return isDublicate;
    }
}
