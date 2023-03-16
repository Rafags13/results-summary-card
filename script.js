import data from './data.json' assert {type: 'json'};

for (const currentItem of data) {
    const summaryElement = document.getElementById(currentItem.category);
    const summaryResultElement = summaryElement.querySelector('.result-number');
    const summaryImageElement = summaryElement.querySelector('.result-typo .icon');
    
    summaryResultElement.textContent = currentItem.score;
    summaryImageElement.src = currentItem.icon;
}