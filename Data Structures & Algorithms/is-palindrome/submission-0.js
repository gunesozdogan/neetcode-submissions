class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let firstPointer;
        let secondPointer;
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        for (let i = 0; i < cleaned.length; i++) {
            firstPointer = cleaned[i];
            secondPointer = cleaned[cleaned.length - 1 - i];

            if (i === cleaned.length - 1 - i) {
                break;
            }

            if (firstPointer !== secondPointer) {
                return false;
            }
        }

        return true;
    }
}
