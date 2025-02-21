// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   });
// }

// const promise = getUsers();

// promise.then((zainab) => {
//   console.log(zainab);
// });

// Step 1: Create a function to call the API
function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // Check if the response is okay
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(data => {
            // Process the data
            console.log('Users:', data);
        })
        .catch(error => {
            // Handle any errors
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Step 2: Call the function
fetchUsers();





