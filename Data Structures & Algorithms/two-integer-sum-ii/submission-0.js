class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let point1 = 0
        let point2 = numbers.length - 1

        while (target !== numbers[point1] + numbers[point2]) {
            if (target > numbers[point1] + numbers[point2]) {
                point1 += 1;
            } else {
                point2 -= 1;
            }
        }

        return [point1 + 1, point2 + 1]
    }
}
