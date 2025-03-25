export class Calculator {
    constructor(screenId) {
        this.screen = document.getElementById(screenId);
        if (!this.screen) {
            throw new Error(`Screen element with id "${screenId}" not found.`);
        }
        this.calculationDone = false;
    }

    appendValue(value) {
        const currentText = this.screen.textContent;
        const operators = ['+', '-', '×', '÷', '.'];
        const lastChar = currentText.slice(-1);

        if (currentText.length >= 20) {
            alert("cannot exceed more than 20 input values");
            return
        }

        if (this.calculationDone) {
            this.screen.textContent = '';
            this.calculationDone = false;
        }

        if (operators.includes(lastChar) && operators.includes(value)) {
            return;
        }

        if (value === '.' && (lastChar === '.' || currentText.split(/[\+\-\*\/]/).pop().includes('.'))) {
            alert("Cannot enter multiple decimal values");
            return;
        }

        if (this.screen.textContent === '0' && !operators.includes(value)) {
            this.screen.textContent = value;
        } else {
            this.screen.textContent += value;
        }
        this.screen.scrollTo(this.screen.offsetWidth, 0)
    }

    add() {
        this.appendValue('+');
    }

    subtract() {
        this.appendValue('-');
    }

    multiply() {
        this.appendValue('×');
    }

    divide() {
        this.appendValue('÷');
    }

    addOpenParenthesis() {
        this.appendValue('(');
    }

    addCloseParenthesis() {
        this.appendValue(')');
    }

    backspace() {
        let currentValue = this.screen.textContent;
        this.screen.textContent = currentValue.slice(0, -1) || '0';
    }

    clearDisplay() {
        this.screen.textContent = '0';
    }

    tenPowerX() {
        this.appendValue('10^');
    }

    xpowery() {
        if (!this.screen.textContent.includes('^')) {
            this.appendValue('^');
        }
    };

    square() {
        if (!this.screen.textContent.includes('^')) {
            this.appendValue('^2');
        }
    };

    sqrt() {
        this.appendValue('sqrt(');
    };

    log() {
        this.screen.textContent = 'log(';
    };

    ln() {
        this.screen.textContent = 'ln(';
    };

    absoluteValue() {
        this.appendValue('abs(');
    }

    factorial(n) {
        if (n < 0) return "Error";
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    result() {
        let expression = this.screen.textContent
            .replace('×', '*')
            .replace('÷', '/')
            .replace('%', '%')
            .replace(/π/g, Math.PI)
            .replace('10^', '10**')
            .replace('^', '**')
            .replace('log', 'Math.log10')
            .replace('ln', 'Math.log')
            .replace('abs', 'Math.abs')
            .replace('sqrt', 'Math.sqrt');

        expression = expression.replace(/(\d+)!/g, (match, num) => this.factorial(parseInt(num)));

        try {
            const evaluatedResult = eval(expression);
            this.screen.textContent = evaluatedResult;
            this.calculationDone = true;
        } catch (error) {
            alert('Error');
        }
    }

    appendPi() {
        const piSymbol = 'π';
        if (this.screen.textContent === '0') {
            this.appendValue(piSymbol);
        } else {
            this.appendValue(`${piSymbol}`);
        }
    }

    reciprocal() {
        const x = parseFloat(this.screen.textContent);
        if (isNaN(x) || x === 0) {
            this.screen.textContent = 'Error';
        } else {
            this.screen.textContent = (1 / x);
        }
    };

    // Dropdown functionality
    setupDropdown(btnId, menuId) {
        const dropdownBtn = document.getElementById(btnId);
        const dropdownMenu = document.getElementById(menuId);

        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function () {
            dropdownMenu.style.display = "none";
        });

        dropdownMenu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
}
