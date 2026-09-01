class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = {};

        for (let i = 0; i < nums.length; i++) {
            myMap[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const remaining = target - nums[i];

            if (myMap[remaining] !== undefined && myMap[remaining] !== i) {
                return [i, myMap[remaining]];
            }
        }

        return [];
    }
}
