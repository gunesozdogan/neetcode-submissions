class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const result = [];
        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        const bucket = Array.from({length: nums.length + 1}, ()=>[]);
        
        for (const [num, total] of freq) {
            bucket[total].push(num);
        }

        for (let i = nums.length; i >= 0; i--) {
            for (let num of bucket[i]) {
                if (result.length < k) {
                    result.push(num)
                }
            }
        }

        return result;
    }
}
