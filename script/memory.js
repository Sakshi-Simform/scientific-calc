// memory-clear-btn
export function handleMC() {
    localStorage.removeItem('calculationOutput');
}

// memory-recall btn
export function handleMR(screen) {
    let inputvalue = screen.textContent;

    if (inputvalue === '0' || inputvalue === '') {
        inputvalue = '';
    }
    const memoryValue = localStorage.getItem('calculationOutput');
    if (memoryValue) {
        screen.textContent = inputvalue + memoryValue;
    } 
}

// memory-store-btn
export function handleMS(screen, getValueCallback) {
    const valueToStore = getValueCallback(screen);
    if (valueToStore !== null && valueToStore !== undefined) {
        localStorage.setItem('calculationOutput', valueToStore);
        console.log(`Memory Stored: ${valueToStore}`);
    } else {
        console.error("Error storing memory: Invalid value.");
    }
}

// memory-add/minus-btn
export function handleMplusAndMinus(ref, screen, getValueCallback, operation) {
    const memoryValue = parseFloat(localStorage.getItem('calculationOutput') || "0");
    const currentValue = parseFloat(getValueCallback(screen));

    let newMemoryValue;

    if (operation === 'add') {
        newMemoryValue = memoryValue + currentValue;
    } else if (operation === 'subtract') {
        newMemoryValue = memoryValue - currentValue;
    }
    localStorage.setItem('calculationOutput', newMemoryValue.toString());
}
