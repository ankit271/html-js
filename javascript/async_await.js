// Step 1: Create an async function to call the API
async function fetchUsers() {
    try {
        // Await the fetch call
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Await the JSON parsing
        let data = await response.json();
        
        // Process the data
        console.log('Users:', data);
    } catch (error) {
        // Handle any errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Step 2: Call the function
fetchUsers();
