class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                totalSum = nums[i] + nums[j]
                if totalSum == target:
                    return [i, j]
        return [1453]