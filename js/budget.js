// budget.js
function initBudgetPage() {
    const budgetPage = document.getElementById('budget-page');
    budgetPage.innerHTML = ''; // Clear the existing content

    const questionText = document.createElement('h2');
    questionText.classList.add('question-text');
    questionText.textContent = 'What is your budget for the TV?';

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '5'; // Update the minimum value to 5 (represents 5,000)
    slider.max = '200';
    slider.step = '1';
    slider.value = '30'; // Update the starting value to 30 (represents 30,000)
    slider.classList.add('budget-slider'); // Add a unique class for the budget slider
    slider.addEventListener('input', updateBudgetValue);

    const budgetValue = document.createElement('div');
    budgetValue.classList.add('budget-value');
    budgetValue.textContent = '₹30,000'; // Initialize the budget value to ₹30,000

    const budgetCallout = document.createElement('div');
    budgetCallout.classList.add('budget-callout');

    const navigationButtons = document.createElement('div');
    navigationButtons.classList.add('navigation-buttons');

    const backButton = document.createElement('button');
    backButton.classList.add('navigation-button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        showPage('viewing-distance-page');
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('navigation-button');
    nextButton.setAttribute('data-action', 'next');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        processBudget();
        showPage('room-brightness-page');
    });

    sliderContainer.appendChild(slider);
    navigationButtons.appendChild(backButton);
    navigationButtons.appendChild(nextButton);

    budgetPage.appendChild(questionText);
    budgetPage.appendChild(sliderContainer);
    budgetPage.appendChild(budgetValue);
    budgetPage.appendChild(budgetCallout);
    budgetPage.appendChild(navigationButtons);

    updateBudgetValue(); // Call updateBudgetValue() initially to set the correct budget value and callout
}

function updateBudgetValue() {
    const slider = document.querySelector('.budget-slider'); // Use the unique class for the budget slider
    const budgetValue = document.querySelector('.budget-value');
    const budgetCallout = document.querySelector('.budget-callout');

    const budgetInThousands = parseInt(slider.value);
    const budget = budgetInThousands * 1000;
    budgetValue.textContent = '₹' + budget.toLocaleString('en-IN');

    const nextButton = document.querySelector('.navigation-button[data-action="next"]');
    if (budgetInThousands < 15) {
        budgetCallout.textContent = 'Low budget might reduce choices. Consider selecting a slightly higher budget.';
        budgetCallout.style.backgroundColor = '#fff3e0'; // Update the callout background color
        budgetCallout.style.color = '#ff9800'; // Update the callout text color
        nextButton.style.backgroundColor = '#ff9800'; // Change the button color to indicate low budget
    } else if (budgetInThousands >= 15 && budgetInThousands < 30) {
        budgetCallout.textContent = 'We will try to find the best option within your size criteria but will also look at top brands with a lower size if possible.';
        budgetCallout.style.backgroundColor = '#fff3e0'; // Update the callout background color
        budgetCallout.style.color = '#ff9800'; // Update the callout text color
        nextButton.style.backgroundColor = '#ff5a5f'; // Reset the button color for normal budgets
    } else if (budgetInThousands >= 30 && budgetInThousands < 50) {
        budgetCallout.textContent = 'We will try to find the best option within your size criteria but will also look at top brands with a lower size if possible.';
        budgetCallout.style.backgroundColor = '#fff3e0'; // Update the callout background color
        budgetCallout.style.color = '#ff9800'; // Update the callout text color
        nextButton.style.backgroundColor = '#ff5a5f'; // Reset the button color for normal budgets
    } else if (budgetInThousands >= 50 && budgetInThousands < 80) {
        budgetCallout.textContent = 'We will look for the best high-end options and will also propose better size options if available.';
        budgetCallout.style.backgroundColor = '#fff3e0'; // Update the callout background color
        budgetCallout.style.color = '#ff9800'; // Update the callout text color
        nextButton.style.backgroundColor = '#ff5a5f'; // Reset the button color for normal budgets
    } else {
        budgetCallout.textContent = 'We will try to find the best options with extra features and top brands.';
        budgetCallout.style.backgroundColor = '#fff3e0'; // Update the callout background color
        budgetCallout.style.color = '#ff9800'; // Update the callout text color
        nextButton.style.backgroundColor = '#ff5a5f'; // Reset the button color for normal budgets
    }
}

function processBudget() {
    const slider = document.querySelector('.budget-slider'); // Use the unique class for the budget slider
    const budgetInThousands = parseInt(slider.value);
    const budget = budgetInThousands * 1000;
    // Process the budget value (e.g., store it for later use)
    console.log('Budget:', budget);
}