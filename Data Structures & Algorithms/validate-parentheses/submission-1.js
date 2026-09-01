class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            '[' : ']',
            '{' : '}',
            '(' : ')'
        };

        for (let i = 0; i < s.length; i ++) {
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(map[s[i]]);
            } else if (s[i] === stack[stack.length - 1]) {    
                stack.pop();
            } else {
                return false;
            }
        }


        return stack.length === 0
    }
}
