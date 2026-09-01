class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]]) {
               freq[nums[i]].frequency += 1;
            } else {
                freq[nums[i]] = { frequency: 1, number: nums[i] };
            }
        }

        return Object.values(freq).sort((a,b) => b.frequency - a.frequency).slice(0, k).map(item => item.number)
    }
}
