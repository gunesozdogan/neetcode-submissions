class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = '';

        for (let str of strs) {
            output = output + str.length + '/' + str;
        }

        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const output = [];

        while (i < str.length) {
            const sep = str.indexOf('/', i);
            const length = Number(str.slice(i, sep));
            const newStartIndex = sep + 1;
            output.push(str.slice(newStartIndex, newStartIndex + length));
            i = newStartIndex + length
        }

        return output;
    }
}
