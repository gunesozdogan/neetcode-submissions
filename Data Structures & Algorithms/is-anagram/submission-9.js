class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = {};

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            myMap[s[i]] = (myMap[s[i]] || 0) + 1;
            myMap[t[i]] = (myMap[t[i]] || 0) - 1;
        }

        return Object.values(myMap).every(value => value === 0);
    }
}
