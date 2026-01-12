// Fetch the name value from the API on page load
async function fetchName() {
    try {
        const response = await fetch('/.netlify/functions/get-name');
        if (!response.ok) {
            throw new Error('Function not available');
        }
        const data = await response.text();
        // Check if response looks like HTML (fallback from dev server)
        if (data.trim().startsWith('<!DOCTYPE') || data.trim().startsWith('<html')) {
            throw new Error('Function returned HTML instead of text');
        }
        document.getElementById('name').textContent = data;
    } catch (error) {
        console.error('Error fetching name:', error);
        // Fallback for development - use default value
        document.getElementById('name').textContent = 'default';
    }
}

// Call the function when the page loads
fetchName();
