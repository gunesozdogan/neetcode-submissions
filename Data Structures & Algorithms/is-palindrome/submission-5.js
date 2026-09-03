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

        let a = 0;
        let z = s.length - 1;
        
        while (a < z) {
            while (!isAlpha(s[a]) && a < s.length - 1) {
                a++;
            }
            while (!isAlpha(s[z]) && z > 0) {
                z--;
            }

            if (isAlpha(s[a]) && isAlpha(s[z]) && s[a].toLowerCase() !== s[z].toLowerCase()) {
                return false;
            } else {
                a++;
                z--;
            }

        }

        return true;
    }
}
