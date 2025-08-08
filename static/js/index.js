// This script dynamically loads the navbar and footer into the HTML pages.
document.addEventListener('DOMContentLoaded', () => {
    // Function to load and inject HTML
    async function loadHTML(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
        } catch (e) {
            console.error(`Failed to load ${url}:`, e);
        }
    }

    // Create containers for the navbar and footer if they don't exist
    let navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) {
        navbarContainer = document.createElement('div');
        navbarContainer.id = 'navbar-container';
        document.body.prepend(navbarContainer);
    }

    let footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer-container';
        document.body.appendChild(footerContainer);
    }

    // Load the navbar and footer
    loadHTML('./static/html/navbar.html', 'navbar-container');
    loadHTML('./static/html/footer.html', 'footer-container');
});
