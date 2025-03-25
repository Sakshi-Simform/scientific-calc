import { Calculator } from './calculator.js';
import { handleKeyPress } from './keyboardEvents.js'; // If external keyboard handling is implemented

// Initialize the calculator
const calculator = new Calculator('screen');

// Initialize buttons for the calculator
const initializeButtons = (buttonClass) => {
    const numberButtons = document.querySelectorAll(`${buttonClass}.num`);
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendValue(button.textContent.trim());
        });
    });

    // Arithmetic operations
    document.querySelector('.add-btn').addEventListener('click', () => calculator.add());
    document.querySelector('.subtract-btn').addEventListener('click', () => calculator.subtract());
    document.querySelector('.multiply-btn').addEventListener('click', () => calculator.multiply());
    document.querySelector('.divide-btn').addEventListener('click', () => calculator.divide());

    // Parentheses
    document.querySelector('.open-paren-btn').addEventListener('click', () => calculator.addOpenParenthesis());
    document.querySelector('.close-paren-btn').addEventListener('click', () => calculator.addCloseParenthesis());

    // Core functions
    document.querySelector('#equals').addEventListener('click', () => calculator.result());
    document.querySelector('#backspace').addEventListener('click', () => calculator.backspace());
    document.querySelector('.clear-btn').addEventListener('click', () => calculator.clearDisplay());
    document.querySelector('.pi-btn').addEventListener('click', () => calculator.appendPi());

    //Advance Functions
    document.querySelector('.modulus-btn').addEventListener('click', () => calculator.appendValue('%'));
    document.querySelector('.exponent-btn').addEventListener('click', () => calculator.appendValue('^'));
    document.querySelector('.factorial-btn').addEventListener('click', () => calculator.appendValue('!'));
    document.querySelector('.log-btn').addEventListener('click', () => calculator.log());
    //document.querySelector('.eulars-btn').addEventListener('click', () => this.eulersFormula());
    document.querySelector('.logn-btn').addEventListener('click', () => calculator.ln());
    document.querySelector('.reciprocal-btn').addEventListener('click', () => calculator.reciprocal());
    document.querySelector('.abs-btn').addEventListener('click', () => calculator.absoluteValue());
    document.querySelector('.square-btn').addEventListener('click', () => calculator.square());
    document.querySelector('.sqrt-btn').addEventListener('click', () => calculator.sqrt());
    document.querySelector('.power-btn').addEventListener('click', () => calculator.xpowery());
    document.querySelector('.ten-power-btn').addEventListener('click', () => calculator.tenPowerX());
    //document.querySelector('.toggle-sign-btn').addEventListener('click', () => calculator.toggleSign());
    //document.querySelector('.second-btn').addEventListener('click', (e) => calculator.toggleSecondPrimary(e.target));
    document.querySelector('.fe-btn').addEventListener('click', () => calculator.FEmode());

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress.bind(calculator));
};

initializeButtons('.btn');

// Initialize dropdown menus using the calculator's method
calculator.setupDropdown("dropdownBtn", "dropdownMenu");
calculator.setupDropdown("dropdownBtn1", "dropdownMenu1");
