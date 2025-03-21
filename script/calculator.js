export const Calculator = (function () {

    function Calculator(screenId) {
        this.screen = document.getElementById(screenId);
        if (!this.screen) {
            throw new Error(`Screen element with id "${screenId}" not found.`);
        }
    }


    Calculator.prototype.appendValue = function (value) {
        const currentText = this.screen.textContent;
    
        const operators = ['+', '-', '×', '÷', '.'];
        const lastChar = currentText.slice(-1);
        if (operators.includes(value) && operators.includes(lastChar)) {
            alert('Error');
        }
    
        if (this.screen.textContent === '0' && !operators.includes(value)) {
            this.screen.textContent = value;
        } else {
            this.screen.textContent += value;
        }
    };

    // Basic arithmetic operations
    Calculator.prototype.add = function () {
        this.appendValue('+');
    };

    Calculator.prototype.subtract = function () {
        this.appendValue('-');
    };

    Calculator.prototype.multiply = function () {
        this.appendValue('×');
    };

    Calculator.prototype.divide = function () {
        this.appendValue('÷');
    };

    Calculator.prototype.addOpenParenthesis = function () {
        this.appendValue('(');
    };

    Calculator.prototype.addCloseParenthesis = function () {
        this.appendValue(')');
    };

    // Backspace
    Calculator.prototype.backspace = function () {
        let currentValue = this.screen.textContent;
        this.screen.textContent = currentValue.slice(0, -1) || '0';
    };

    // Clear 
    Calculator.prototype.clearDisplay = function () {
        this.screen.textContent = '0';
    };

    // Evaluate result 
    Calculator.prototype.result = function () {
        let expression = this.screen.textContent
            .replace('×', '*')
            .replace('÷', '/')
            .replace(/π/g, Math.PI);

        try {
            // Evaluate the expression
            const evaluatedResult = eval(expression);

            // Update the screen with the result
            this.screen.textContent = evaluatedResult;

        } catch (error) {
            alert('Error');
            console.error("Error evaluating expression:", error);
        }
    };

    // Pi
    Calculator.prototype.appendPi = function () {
        const piSymbol = 'π'; 
        if (this.screen.textContent === '0') {
            this.appendValue(piSymbol);
        } else {
            this.appendValue(`${piSymbol}`);
        }
    };
    

    return Calculator;
})();
