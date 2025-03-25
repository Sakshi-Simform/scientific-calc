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

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress.bind(calculator));
};

initializeButtons('.btn');

// Initialize dropdown menus using the calculator's method
calculator.setupDropdown("dropdownBtn", "dropdownMenu");
calculator.setupDropdown("dropdownBtn1", "dropdownMenu1");
