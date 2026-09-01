class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        let isDublicate = false;

        nums.forEach(num => {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1)
                isDublicate = true;
            } else {
                map.set(num, 1);
            }
        })

        return isDublicate;
    }
}
