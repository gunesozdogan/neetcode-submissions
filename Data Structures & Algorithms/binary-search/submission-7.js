class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        let mid = Math.floor((start + end) / 2);

        while (start <= end) {
            if (target > nums[mid]) {
                start = mid + 1;
            } else if (target < nums[mid]) {
                end = mid - 1;
            }

            mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) {
                return mid;
            }
        }

        return -1;
    }
}
