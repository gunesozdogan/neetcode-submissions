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
        
        if (this.min.length && val <= this.min[this.min.length - 1] || !this.min.length) {
            this.min.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length) {
            const lastItem = this.stack.pop();
        
            if (lastItem === this.min[this.min.length - 1]) {
                this.min.pop();
            }
        }
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
