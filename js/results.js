// results.js
function initResultsPage() {
    const resultsPage = document.getElementById('results-page');
    resultsPage.innerHTML = ''; // Clear the existing content

    const preferencesCard = document.createElement('div');
    preferencesCard.classList.add('preferences-card');

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        showPage('viewing-distance-page');
    });

    preferencesCard.appendChild(editButton);

    // Add user preferences to the preferences card
    const viewingDistance = localStorage.getItem('viewingDistance') || 'N/A';
    const budget = localStorage.getItem('budget') || 'N/A';
    const roomBrightness = localStorage.getItem('roomBrightness') || 'N/A';
    const contentTypes = JSON.parse(localStorage.getItem('contentTypes')) || [];

    const preferencesContent = document.createElement('div');
    preferencesContent.innerHTML = `
        <p>Viewing Distance: ${viewingDistance} feet</p>
        <p>Budget: ₹${budget}</p>
        <p>Room Brightness: ${roomBrightness}</p>
        <p>Content Types: ${contentTypes.join(', ')}</p>
    `;

    preferencesCard.appendChild(preferencesContent);

    const tvResults = document.createElement('div');
    tvResults.classList.add('tv-results');

    // Fetch TV recommendations from the database
    fetch('https://my-json-server.typicode.com/utkarshshh/trusted-tv-buyer/db')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Filter TV recommendations based on user preferences
            const filteredTVs = filterTVs(data, viewingDistance, budget, roomBrightness, contentTypes);

            // Display the filtered TV recommendations
            if (filteredTVs.length > 0) {
                filteredTVs.forEach(tv => {
                    const tvCard = document.createElement('div');
                    tvCard.classList.add('tv-card');

                    tvCard.innerHTML = `
                        <h3>${tv.brand} ${tv.model}</h3>
                        <p>Size: ${tv.size} inches</p>
                        <p>Resolution: ${tv.resolution}</p>
                        <p>Display Type: ${tv.displayType}</p>
                        <p>Price: ₹${tv.price}</p>
                        <a href="${tv.url}" target="_blank">Buy Now</a>
                    `;

                    tvResults.appendChild(tvCard);
                });
        } else {
            const noResults = document.createElement('p');
            noResults.textContent = 'No TV recommendations found based on your preferences.';
            tvResults.appendChild(noResults);
        }
    })
    .catch(error => {
        console.error('Error fetching TV recommendations:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'An error occurred while fetching TV recommendations. Please try again later.';
        tvResults.appendChild(errorMessage);
    });

    resultsPage.appendChild(preferencesCard);
    resultsPage.appendChild(tvResults);
}

function filterTVs(tvData, viewingDistance, budget, roomBrightness, contentTypes) {
    let filteredTVs = tvData;

    // Filter by size based on viewing distance
    const recommendedSize = getRecommendedSize(viewingDistance);
    filteredTVs = filteredTVs.filter(tv => tv.size >= recommendedSize - 10 && tv.size <= recommendedSize + 10);

    // Filter by budget
    filteredTVs = filteredTVs.filter(tv => tv.price <= budget);

    // Filter by room brightness
    if (roomBrightness === 'bright') {
        filteredTVs = filteredTVs.filter(tv => tv.brightRoom);
    } else if (roomBrightness === 'dark') {
        filteredTVs = filteredTVs.filter(tv => tv.darkRoom);
    }

    // Filter by content types
    filteredTVs = filteredTVs.filter(tv =>
        contentTypes.every(contentType => tv[contentType])
    );

    // If less than 3 options, loosen the conditions
    if (filteredTVs.length < 3) {
        filteredTVs = tvData.filter(tv =>
            tv.size >= recommendedSize - 15 && tv.size <= recommendedSize + 15 &&
            tv.price <= budget + 500 &&
            (roomBrightness === 'bright' ? tv.brightRoom : tv.darkRoom) &&
            contentTypes.some(contentType => tv[contentType])
        );
    }

    return filteredTVs;
}

function getRecommendedSize(viewingDistance) {
    // Calculate the recommended TV size based on viewing distance
    // You can adjust the formula as needed
    return Math.round(viewingDistance * 8);
}