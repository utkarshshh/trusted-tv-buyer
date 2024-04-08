// content_usage.js
function initContentUsagePage() {
    const contentUsagePage = document.getElementById('content-usage-page');
    contentUsagePage.innerHTML = ''; // Clear the existing content

    const questionText = document.createElement('h2');
    questionText.classList.add('question-text');
    questionText.textContent = 'What type of content will you primarily watch?';

    const contentOptions = document.createElement('div');
    contentOptions.classList.add('content-options');

    const contentTypes = ['Movies', 'TV Shows', 'Sports', 'Gaming'];

    contentTypes.forEach(contentType => {
        const contentOption = document.createElement('label');
        contentOption.classList.add('content-option');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = contentType;

        const contentText = document.createTextNode(contentType);

        contentOption.appendChild(checkbox);
        contentOption.appendChild(contentText);

        contentOptions.appendChild(contentOption);
    });

    const navigationButtons = document.createElement('div');
    navigationButtons.classList.add('navigation-buttons');

    const backButton = document.createElement('button');
    backButton.classList.add('navigation-button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        showPage('room-brightness-page');
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('navigation-button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        processContentUsage();
        showPage('results-page');
    });

    navigationButtons.appendChild(backButton);
    navigationButtons.appendChild(nextButton);

    contentUsagePage.appendChild(questionText);
    contentUsagePage.appendChild(contentOptions);
    contentUsagePage.appendChild(navigationButtons);
}

function processContentUsage() {
    const selectedContentTypes = Array.from(document.querySelectorAll('.content-option input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    // Process the selected content types (e.g., store them for later use)
    console.log('Selected Content Types:', selectedContentTypes);
}