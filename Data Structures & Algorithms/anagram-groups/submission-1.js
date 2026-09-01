class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const myMap = {};

        for (let i = 0; i < strs.length; i++) {
            const sortedStr = strs[i].split('').sort().join('');
        
            if (myMap[sortedStr]) {
                myMap[sortedStr].push(strs[i]);
            } else {
                myMap[sortedStr] = [strs[i]];
            }
        }
       
        return Object.values(myMap);
    }
}
