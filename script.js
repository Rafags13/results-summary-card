import data from './data.json' assert {type: 'json'};

data.forEach(currentItem => {
    const summaryElement = document.getElementById(currentItem.category);
    const summaryResultElement = summaryElement.querySelector('.result-number');
    setScore(currentItem, summaryResultElement);
    setImageFromSvg(currentItem, summaryElement);
});

function setScore(currentItem, summaryElement)  {
    const summaryResultElement = summaryElement.querySelector('.summary-result-number');
    summaryResultElement.innerHTML = currentItem.score;
}

function setImageFromSvg(currentItem, summaryElement) {
    const summaryImageElement = summaryElement.querySelector('.result-typo').querySelector('.icon');
    summaryImageElement.src = currentItem.icon;
}