class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = new Map();
        let total = 0;
        let isAnagram = true;

        if (s.length !== t.length) {
            return false;
        }
        
        for (const char of s) {
            if (myMap.has(char)) {
                myMap.set(char, Number(myMap.get(char)) + 1);
                total += 1
            } else {
                myMap.set(char, 1);
                total += 1;
            }
        }

        for (const char of t) {
            if (myMap.has(char) && myMap.get(char) > 0) {
                myMap.set(char, Number(myMap.get(char)) - 1);
                total -= 1;
            } else {
                isAnagram = false;
            }
        }

        return total === 0 && isAnagram;
    }
}
