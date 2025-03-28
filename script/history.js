// Constants for localStorage keys
const HISTORY_KEY = 'calculationHistory';

// save-history
export function saveHistory(historyEntry) {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch (error) {
        console.error("Error parsing history from localStorage", error);
    }

    history.push(historyEntry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// clear-history
export function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
    const historyList = document.getElementById('historyList');
    if (historyList) {
        historyList.innerHTML = '';
    }
}

// display-history
export function displayHistory() {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch (error) {
        console.error("Error parsing history from localStorage", error);
    }

    const historyList = document.getElementById('historyList');
    const historyContainer = document.getElementById('historyContainer');
    const toggleHistoryButton = document.getElementById('toggleHistoryButton');

    if (!historyList || !historyContainer) {
        console.error("History list or container element not found.");
        return;
    }

    // Toggle history display
    if (historyContainer.style.display === 'block') {
        historyContainer.style.display = 'none';
        toggleHistoryButton.innerHTML = '<span><i class="fa fa-history"></i></span>';
    } else {
        historyContainer.style.display = 'block';
        toggleHistoryButton.innerHTML = '<span><i class="fa fa-reply"></i></span>';
        historyList.innerHTML = ''; // Clear previous history list

        // Check if history is empty
        if (history.length === 0) {
            const noHistoryMessage = document.createElement('p');
            noHistoryMessage.textContent = 'No history available';
            historyList.appendChild(noHistoryMessage);
        } else {
            // Create list of history items
            const ul = document.createElement('ul');
            ul.classList.add('history-list');

            history.forEach((item, index) => {
                const li = document.createElement('li');
                const div = document.createElement('div');
                div.classList.add('history-item');
                div.textContent = `${index + 1}. ${item}`;
                div.addEventListener('click', () => {
                    const screen = document.getElementById('screen');
                    screen.textContent = item;
                });
                li.appendChild(div);
                ul.appendChild(li);
            });

            historyList.appendChild(ul);
        }

        // Clear history button
        const clearHistoryBtn = document.createElement('button');
        clearHistoryBtn.classList.add('clear-history-btn');
        clearHistoryBtn.innerHTML = 'Clear History';
        clearHistoryBtn.addEventListener('click', clearHistory);
        historyList.appendChild(clearHistoryBtn);
    }
}

// toggle-history-btn
export function setupHistoryToggle() {
    const toggleHistoryButton = document.getElementById('toggleHistoryButton');
    const historyContainer = document.getElementById('historyContainer');
    if (toggleHistoryButton) {
        toggleHistoryButton.addEventListener('click', displayHistory);
    }
}
