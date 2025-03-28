// // memory-clear-btn
// export function handleMC() {
//     if (localStorage) {
//         localStorage.removeItem('calculationOutput');
//         console.log("Memory Cleared");
//     } else {
//         console.error("Error clearing memory: localStorage is not available.");
//     }
// }

// //memory-recall btn
// export function handleMR(screen) {
//     let inputvalue = screen.textContent

//     if(inputvalue === '0' || inputvalue === ''){
//         inputvalue = '';
//     }
//     if (localStorage) {
//         const memoryValue = localStorage.getItem('calculationOutput');
//         if (memoryValue) {
//             screen.textContent = inputvalue + memoryValue;
//         } else {
//             console.log("No memory value stored.");
//         }
//     } 
// }

// // memory-store-btn
// export function handleMS(screen, getValueCallback) {
//     if (localStorage) {
//         const valueToStore = getValueCallback(screen);
//         if (valueToStore !== null && valueToStore !== undefined) {
//             localStorage.setItem('calculationOutput', valueToStore);
//             console.log(`Memory Stored: ${valueToStore}`);
//         } else {
//             console.error("Error storing memory: Invalid value.");
//         }
//     } else {
//         console.error("Error storing memory: localStorage is not available.");
//     }
// }

// // memory-add/minus-btn
// export function handleMplusAndMinus(ref, screen, getValueCallback) {
//     if (localStorage) {
//         const memoryValue = parseFloat(localStorage.getItem('calculationOutput') || "0");
//         const currentValue = parseFloat(getValueCallback(screen));

//         if (isNaN(memoryValue) || isNaN(currentValue)) {
//             console.error("Error performing memory operation: Invalid number value.");
//             return;
//         }

//         let newValue;
//         if (ref.className.includes('plus')) {
//             newValue = memoryValue + currentValue;
//         } else if (ref.className.includes('minus')) {
//             newValue = memoryValue - currentValue;
//         } else {
//             console.error("Error performing memory operation: Invalid memory operation.");
//             return;
//         }

//         localStorage.setItem('calculationOutput', newValue.toString());
//         console.log(`New Memory Value: ${newValue}`);
//     } else {
//         console.error("Error performing memory operation: localStorage is not available.");
//     }
// }
// memory-clear-btn
export function handleMC() {
    localStorage.removeItem('calculationOutput');
    console.log("Memory Cleared");
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
    } else {
        console.log("No memory value stored.");
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
export function handleMplusAndMinus(ref, screen, getValueCallback) {
    const memoryValue = parseFloat(localStorage.getItem('calculationOutput') || "0");
    const currentValue = parseFloat(getValueCallback(screen));

    if (isNaN(memoryValue) || isNaN(currentValue)) {
    }
}
