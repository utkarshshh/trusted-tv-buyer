// viewing_distance.js
function initViewingDistancePage() {
    const viewingDistancePage = document.getElementById('viewing-distance-page');
    viewingDistancePage.innerHTML = ''; // Clear the existing content
    const questionText = document.createElement('h2');
    questionText.classList.add('question-text');
    questionText.textContent = 'How far will you sit from the TV?';

    const inputHint = document.createElement('p');
    inputHint.classList.add('input-hint');
    inputHint.textContent = 'This will help determine the ideal TV size for your viewing distance.';

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '1';
    slider.max = '14';
    slider.value = '6';
    slider.classList.add('slider');
    slider.addEventListener('input', updateDistanceValue);

    const distanceValue = document.createElement('div');
    distanceValue.classList.add('distance-value');
    distanceValue.textContent = '6 feet';

    const navigationButtons = document.createElement('div');
    navigationButtons.classList.add('navigation-buttons');

    const backButton = document.createElement('button');
    backButton.classList.add('navigation-button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        showPage('welcome-page');
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('navigation-button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        processViewingDistance();
        showPage('budget-page');
    });

    sliderContainer.appendChild(slider);
    navigationButtons.appendChild(backButton);
    navigationButtons.appendChild(nextButton);

    viewingDistancePage.appendChild(questionText);
    viewingDistancePage.appendChild(inputHint);
    viewingDistancePage.appendChild(sliderContainer);
    viewingDistancePage.appendChild(distanceValue);
    viewingDistancePage.appendChild(navigationButtons);
}

function updateDistanceValue() {
    const slider = document.querySelector('.slider');
    const distanceValue = document.querySelector('.distance-value');
    distanceValue.textContent = slider.value + ' feet';
}

function processViewingDistance() {
    const slider = document.querySelector('.slider');
    const viewingDistance = parseInt(slider.value);
    // Process the viewing distance value (e.g., store it for later use)
    console.log('Viewing Distance:', viewingDistance);
}