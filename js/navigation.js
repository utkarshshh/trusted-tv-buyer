// navigation.js
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-container');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';

    // Initialize the selected page
    if (pageId === 'welcome-page') {
        initWelcomePage();
    } else if (pageId === 'viewing-distance-page') {
        initViewingDistancePage();
    } else if (pageId === 'budget-page') {
        initBudgetPage();
    } else if (pageId === 'room-brightness-page') {
        initRoomBrightnessPage();
    } else if (pageId === 'content-usage-page') {
        initContentUsagePage();
    } else if (pageId === 'results-page') {
        initResultsPage();
    }
}