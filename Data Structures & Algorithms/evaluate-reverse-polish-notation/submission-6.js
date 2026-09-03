class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = new Set(['+', '-', '*', '/']);

        for (let i = 0; i < tokens.length; i++) {
            let firstNum;
            let secondNum;

            if (!ops.has(tokens[i])) {
                stack.push(Number(tokens[i]))
            } else {
                switch(tokens[i]) {
                    case '+' : 
                    secondNum = stack.pop();
                    firstNum = stack.pop();
                    stack.push(firstNum + secondNum);
                    break;
                    case '-' : 
                    secondNum = stack.pop();
                    firstNum = stack.pop();
                    stack.push(firstNum - secondNum);
                    break;
                    case '/' :
                    secondNum = stack.pop();
                    firstNum = stack.pop();
                    stack.push(Math.trunc(firstNum / secondNum));
                    break;
                    case '*' :
                    secondNum = stack.pop();
                    firstNum = stack.pop();
                    stack.push(firstNum * secondNum);
                    break;
                }
            }
             
        }

        return stack[0];       
    }
}
