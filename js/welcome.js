// welcome.js
function initWelcomePage() {
    const welcomePage = document.getElementById('welcome-page');

    const heading = document.createElement('h1');
    heading.classList.add('welcome-heading');
    heading.textContent = 'Find Your Perfect TV in 30 Seconds';

    const description = document.createElement('p');
    description.classList.add('welcome-description');
    description.textContent = 'Our engine catalogs 50+ global brands, 200+ active TV models, and over 100,000 independent trusted reviews from Reddit, Quora, and real buyers on Flipkart and Amazon.';

    const startButton = document.createElement('button');
    startButton.classList.add('welcome-button');
    startButton.textContent = 'Get Started';
    startButton.addEventListener('click', () => {
        showPage('viewing-distance-page');
    });

    welcomePage.appendChild(heading);
    welcomePage.appendChild(description);
    welcomePage.appendChild(startButton);
}