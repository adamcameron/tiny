// Fetch the name value from the API on page load
async function fetchName() {
    try {
        const response = await fetch('/.netlify/functions/get-name');
        const data = await response.text();
        document.getElementById('name').textContent = data;
    } catch (error) {
        console.error('Error fetching name:', error);
        document.getElementById('name').textContent = 'World';
    }
}

// Call the function when the page loads
fetchName();
