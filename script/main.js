import { saveHistory, clearHistory, displayHistory, setupHistoryToggle } from './history.js';
import { handleMC, handleMR, handleMS, handleMplusAndMinus } from './memory.js';
import { Calculator } from './calculator.js';
import { handleKeyPress } from './keyboardEvents.js';

const calculator = new Calculator('screen');

const buttonActions = {
    'num': (target) => calculator.appendValue(target.textContent.trim()),
    'add-btn': () => calculator.add(),
    'subtract-btn': () => calculator.subtract(),
    'multiply-btn': () => calculator.multiply(),
    'divide-btn': () => calculator.divide(),
    'open-paren-btn': () => calculator.addOpenParenthesis(),
    'close-paren-btn': () => calculator.addCloseParenthesis(),
    'equals': () => calculator.result(),
    'backspace': () => calculator.backspace(),
    'clear-btn': () => calculator.clearDisplay(),
    'pi-btn': () => calculator.appendPi(),
    'clear-history-btn': () => clearHistory(),
    'modulus-btn': () => calculator.appendValue('%'),
    'exponent-btn': () => calculator.appendValue('^'),
    'factorial-btn': () => calculator.appendValue('!'),
    'power-btn': () => calculator.xpowery(),
    'ten-power-btn': () => calculator.tenPowerX(),
    'toggle-sign-btn': () => calculator.toggleSign(),
    'reciprocal-btn': () => calculator.reciprocal(),
    'log-btn': () => calculator.log(),
    'eulars-btn': () => calculator.eulersFormula(),
    'logn-btn': () => calculator.ln(),
    'abs-btn': () => calculator.absoluteValue(),
    'square-btn': () => calculator.square(),
    'sqrt-btn': () => calculator.sqrt(),
    'second-btn': (target) => calculator.toggleSecondPrimary(target),
    'fe-btn': () => calculator.Femode(),
    'deg-btn': () => {
        if (typeof calculator !== 'undefined' && calculator.setDegMode) {
            calculator.setDegMode();
        }
    },
    // Math functions
    'sin-btn': () => calculator.appendValue('sin('),
    'cos-btn': () => calculator.appendValue('cos('),
    'tan-btn': () => calculator.appendValue('tan('),
    'floor-btn': () => calculator.floor(),
    'ceil-btn': () => calculator.ceil(),
};

const initializeButtons = () => {
    const calculatorContainer = document.querySelector('.calculator');

    // General event listener for all buttons
    calculatorContainer.addEventListener('click', (event) => {
        const target = event.target;

        // Handle button actions dynamically based on class or id
        Object.keys(buttonActions).forEach(actionKey => {
            if (target.classList.contains(actionKey) || target.id === actionKey) {
                buttonActions[actionKey](target);
            }
        });
    });

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress.bind(calculator));
};

// initialize buttons
initializeButtons();

// Dropdown setup
calculator.setupDropdown("dropdownBtn", "dropdownMenu");
calculator.setupDropdown("dropdownBtn1", "dropdownMenu1");
setupHistoryToggle();
calculator.initializeMemoryFunctions();
