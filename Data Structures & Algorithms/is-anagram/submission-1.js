class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = new Map();
        let isAnagram = true;

        for (const char of s) {
            if (myMap.has(char)) {
                myMap.set(char, Number(myMap.get(char)) + 1);
            } else {
                myMap.set(char, 1);
            }
        }

        for (const char of t) {
            if (myMap.has(char)) {
                myMap.set(char, Number(myMap.get(char)) - 1);
            } else {
                myMap.set(char, 1);
            }
        }

        myMap.forEach(value => {
            if (value) {
                isAnagram = false;
            }
        })

        return isAnagram;
    }
}
