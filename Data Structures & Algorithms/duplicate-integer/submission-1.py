from collections import defaultdict

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counts = set(nums)
        
        setLen = len(counts)
        numLen = len(nums) 

        return setLen != numLen