// Importing  modules
import { Calculator } from './calculator.js';
import { handleKeyPress } from './keypressHandler.js';


// Initialize the calculator
const calculator = new Calculator('screen');
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle dropdown visibility
dropdownBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent closing when clicking the button
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
document.addEventListener("click", function () {
    dropdownMenu.style.display = "none";
});

// Prevent closing when clicking inside dropdown
dropdownMenu.addEventListener("click", function (event) {
    event.stopPropagation();
});

const dropdownBtn1 = document.getElementById("dropdownBtn1");
const dropdownMenu1 = document.getElementById("dropdownMenu1");

// Toggle dropdown visibility
dropdownBtn1.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent closing when clicking the button
    dropdownMenu1.style.display = dropdownMenu1.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
document.addEventListener("click", function () {
    dropdownMenu1.style.display = "none";
});

// Prevent closing when clicking inside dropdown
dropdownMenu1.addEventListener("click", function (event) {
    event.stopPropagation();
});



// connect to calculator
calculator.initializeButtons = function (buttonClass) {
    const numberButtons = document.querySelectorAll(`${buttonClass}.num`);
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            this.appendValue(button.textContent.trim());
        });
    });

    // Arithmetic operations
    document.querySelector('.add-btn').addEventListener('click', () => this.add());
    document.querySelector('.subtract-btn').addEventListener('click', () => this.subtract());
    document.querySelector('.multiply-btn').addEventListener('click', () => this.multiply());
    document.querySelector('.divide-btn').addEventListener('click', () => this.divide());

    // Parenthesis
    document.querySelector('.open-paren-btn').addEventListener('click', () => this.addOpenParenthesis());
    document.querySelector('.close-paren-btn').addEventListener('click', () => this.addCloseParenthesis());

    // Core functions
    document.querySelector('#equals').addEventListener('click', () => this.result());
    document.querySelector('#backspace').addEventListener('click', () => this.backspace());
    document.querySelector('.clear-btn').addEventListener('click', () => this.clearDisplay());
    document.querySelector('.pi-btn').addEventListener('click', () => this.appendPi());

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress.bind(calculator));
};

// Initialize buttons for the calculator
calculator.initializeButtons('.btn');


