class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlpha = (ch) => {
            return (ch >= '0' && ch <= '9') ||
                (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z'); 
        };

        s = s.split('').map(item => isAlpha(item) ? item : '').join('');

        let firstPointer;
        let secondPointer;
        for (let i = 0; i < s.length; i++) {
            firstPointer = s[i].toLowerCase();
            secondPointer = s[s.length - 1 - i].toLowerCase();

            if (i > s.length - 1 - i) {
                break;
            }

            if (firstPointer !== secondPointer) {
                return false;
            }
        }

        return true;
    }
}
