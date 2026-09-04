class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let row = 0; row < matrix.length; row++) {
            let start = 0;
            let end = matrix[row].length - 1;

            while (start <= end) {
                let mid = Math.floor((start + end) / 2);

                if (matrix[row][mid] === target) {
                    return true;
                } else if (matrix[row][mid] > target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }

        return false;
    }
}
