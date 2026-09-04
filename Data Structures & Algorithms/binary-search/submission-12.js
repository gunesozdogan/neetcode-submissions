class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            let value = nums[mid];

            if (value === target) {
                return mid;
            }

            if (target > value) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return -1;
    }
}
