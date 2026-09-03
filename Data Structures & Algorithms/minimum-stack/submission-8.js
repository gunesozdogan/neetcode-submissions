class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        if (this.min.length) {
            this.min.push(Math.min(val, this.min[this.min.length - 1]))
        } else {
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
       this.min.pop();
       this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length) {
            return this.stack[this.stack.length - 1];
        } else {
            return undefined;
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.min.length) {
            return this.min[this.min.length - 1];
        } else {
            return 0
        }
    }
}
