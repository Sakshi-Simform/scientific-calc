// memory-clear-btn
export function handleMC() {
    localStorage.removeItem('calculationOutput');
}

// memory-recall-btn
export function handleMR(screen) {
    const memoryValue = localStorage.getItem('calculationOutput');
    if (memoryValue !== null) {
        screen.textContent = memoryValue;
    } else {
        screen.textContent = '0';
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

    // Perform the add or subtract operation based on the passed operation
    if (operation === 'add') {
        newMemoryValue = memoryValue + currentValue;
    } else if (operation === 'subtract') {
        newMemoryValue = memoryValue - currentValue;
    } else {
        console.error("Invalid operation provided for memory modification");
        return;
    }

    // Store the updated memory value
    localStorage.setItem('calculationOutput', newMemoryValue.toString());
    console.log(`Memory updated: ${newMemoryValue}`);
}
