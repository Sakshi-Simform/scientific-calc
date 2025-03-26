export function saveHistory(historyEntry) {
    let history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
    history.push(historyEntry);
    localStorage.setItem('calculationHistory', JSON.stringify(history));
}

export function clearHistory() {
    localStorage.removeItem('calculationHistory');
    const historyList = document.getElementById('historyList');
    if (historyList) {
        historyList.innerHTML = '';
    }
}

export function displayHistory() {
    const history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
    const historyList = document.getElementById('historyList');
    const historyContainer = document.getElementById('historyContainer');
    const toggleHistoryButton = document.getElementById('toggleHistoryButton');
    
    if (!historyList || !historyContainer) {
        console.error("History list or container element not found.");
        return;
    }
    
    if (historyContainer.style.display === 'block') {
        historyContainer.style.display = 'none';
        toggleHistoryButton.innerHTML = '<span><i class="fa fa-history"></i></span>';
    } else {
        historyContainer.style.display = 'block';
        toggleHistoryButton.innerHTML = '<span><i class="fa fa-reply"></i></span>';
        historyList.innerHTML = '';
        
        const ul = document.createElement('ul');
        history.forEach((item, index) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.classList.add('history-item');
            div.textContent = `${index + 1}. ${item}`;
            li.appendChild(div);
            ul.appendChild(li);
        });
        
        historyList.appendChild(ul);
    }
}

export function setupHistoryToggle() {
    const toggleHistoryButton = document.getElementById('toggleHistoryButton');
    if (toggleHistoryButton) {
        toggleHistoryButton.addEventListener('click', displayHistory);
    }
}

