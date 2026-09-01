from collections import defaultdict

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sCount = defaultdict(int)
        for letter in s:
            sCount[letter] += 1
        
        for letter in t:
            sCount[letter] -= 1

        for value in sCount.values():
            if value != 0:
                return False
        
        return True
            
