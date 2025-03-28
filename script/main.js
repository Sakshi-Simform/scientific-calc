import { Calculator } from './calculator.js';
import { handleKeyPress } from './keyboardEvents.js';
import { saveHistory, clearHistory, displayHistory, setupHistoryToggle } from './history.js';
import { handleMC, handleMR, handleMplusAndMinus, handleMS } from './memory.js';

const calculator = new Calculator('screen');

// Initialize buttons
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

    // History functions
    document.querySelector('.clear-history-btn').addEventListener('click', () => clearHistory());

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress.bind(calculator));

    //Advance Functions
    document.querySelector('.modulus-btn').addEventListener('click', () => calculator.appendValue('%'));
    document.querySelector('.exponent-btn').addEventListener('click', () => calculator.appendValue('^'));
    document.querySelector('.factorial-btn').addEventListener('click', () => calculator.appendValue('!'));
    document.querySelector('.power-btn').addEventListener('click', () => calculator.xpowery());
    document.querySelector('.ten-power-btn').addEventListener('click', () => calculator.tenPowerX());
    document.querySelector('.toggle-sign-btn').addEventListener('click', () => calculator.toggleSign());
    document.querySelector('.reciprocal-btn').addEventListener('click', () => calculator.reciprocal());

    // Math Functions
    document.querySelector('.log-btn').addEventListener('click', () => calculator.log());
    document.querySelector('.eulars-btn').addEventListener('click', () => calculator.eulersFormula());
    document.querySelector('.logn-btn').addEventListener('click', () => calculator.ln());
    document.querySelector('.abs-btn').addEventListener('click', () => calculator.absoluteValue());
    document.querySelector('.square-btn').addEventListener('click', () => calculator.square());
    document.querySelector('.sqrt-btn').addEventListener('click', () => calculator.sqrt());
    document.querySelector('.second-btn').addEventListener('click', (e) => calculator.toggleSecondPrimary(e.target));


    // degree function
    document.querySelector('.fe-btn').addEventListener('click', () => calculator.Femode());
    document.getElementById('deg-btn').addEventListener('click', () => {
        if (typeof calculator !== 'undefined' && calculator.setDegMode) {
            calculator.setDegMode();
        }
    });

    // Trigonometric functions
    document.querySelector('.sin-btn').addEventListener('click', () => calculator.trigometry('sin'));
    document.querySelector('.cos-btn').addEventListener('click', () => calculator.trigometry('cos'));
    document.querySelector('.tan-btn').addEventListener('click', () => calculator.trigometry('tan'));
    document.querySelector('.floor-btn').addEventListener('click', () => calculator.floor());
    document.querySelector('.ceil-btn').addEventListener('click', () => calculator.ceil());

};

// initialize buttons
initializeButtons('.btn');
calculator.setupDropdown("dropdownBtn", "dropdownMenu");
calculator.setupDropdown("dropdownBtn1", "dropdownMenu1");
setupHistoryToggle();
calculator.initializeMemoryFunctions();