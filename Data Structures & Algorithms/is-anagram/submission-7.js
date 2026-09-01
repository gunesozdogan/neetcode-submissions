class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = {};
        let total = 0;
        let isAnagram = true;

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            myMap[s[i]] = (myMap[s[i]] || 0) + 1;
            myMap[t[i]] = (myMap[t[i]] || 0) - 1;
        }

        Object.values(myMap).forEach(value => {
            if (value) {
                isAnagram = false;
            }
        })

        return isAnagram;
    }
}
