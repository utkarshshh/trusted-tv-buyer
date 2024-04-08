// room_brightness.js
function initRoomBrightnessPage() {
    const roomBrightnessPage = document.getElementById('room-brightness-page');
    roomBrightnessPage.innerHTML = ''; // Clear the existing content

    const questionText = document.createElement('h2');
    questionText.classList.add('question-text');
    questionText.textContent = 'How bright is your room?';

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.step = '1';
    slider.value = '50'; // Initialize the slider in the middle
    slider.classList.add('brightness-slider');
    slider.addEventListener('input', updateRoomBrightness);

    const brightnessCallout = document.createElement('div');
    brightnessCallout.classList.add('brightness-callout');

    const navigationButtons = document.createElement('div');
    navigationButtons.classList.add('navigation-buttons');

    const backButton = document.createElement('button');
    backButton.classList.add('navigation-button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        showPage('budget-page');
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('navigation-button');
    nextButton.setAttribute('data-action', 'next');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        processRoomBrightness();
        showPage('content-usage-page');
    });

    sliderContainer.appendChild(slider);
    navigationButtons.appendChild(backButton);
    navigationButtons.appendChild(nextButton);

    roomBrightnessPage.appendChild(questionText);
    roomBrightnessPage.appendChild(sliderContainer);
    roomBrightnessPage.appendChild(brightnessCallout);
    roomBrightnessPage.appendChild(navigationButtons);

    updateRoomBrightness(); // Call updateRoomBrightness() initially to set the correct styles and callout
}

function updateRoomBrightness() {
    const slider = document.querySelector('.brightness-slider');
    const roomBrightnessPage = document.getElementById('room-brightness-page');
    const questionText = document.querySelector('.question-text');
    const brightnessCallout = document.querySelector('.brightness-callout');

    const brightnessValue = parseInt(slider.value);

    // Update background color and font color based on brightness value
    const darkColor = '#333';
    const brightColor = '#fff';
    const backgroundColor = `hsl(0, 0%, ${brightnessValue}%)`;
    const fontColor = brightnessValue < 50 ? brightColor : darkColor;

    roomBrightnessPage.style.backgroundColor = backgroundColor;
    questionText.style.color = fontColor;
    brightnessCallout.style.color = fontColor;

    // Update brightness callout text based on brightness value
    if (brightnessValue < 25) {
        brightnessCallout.textContent = 'Your room is very dark. OLED TVs will be an excellent choice for this environment.';
        brightnessCallout.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else if (brightnessValue >= 25 && brightnessValue < 50) {
        brightnessCallout.textContent = 'Your room has moderate lighting. Most TV types will work well in this environment.';
        brightnessCallout.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    } else if (brightnessValue >= 50 && brightnessValue < 75) {
        brightnessCallout.textContent = 'Your room is quite bright. You should consider high-brightness TVs like LCD or QLED.';
        brightnessCallout.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    } else {
        brightnessCallout.textContent = 'Your room is very bright. Avoid OLED TVs and opt for high-brightness models like LCD or QLED.';
        brightnessCallout.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
}

function processRoomBrightness() {
    const slider = document.querySelector('.brightness-slider');
    const brightnessValue = parseInt(slider.value);
    // Process the room brightness value (e.g., store it for later use)
    console.log('Room Brightness:', brightnessValue);
}