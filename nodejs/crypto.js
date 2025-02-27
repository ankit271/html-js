const crypto = require('crypto');

// Create a hash (SHA-256 in this case)
const hash = crypto.createHash('sha256');

// Update the hash with some data
hash.update('hello world');

// Get the resulting hash as a hexadecimal string
const result = hash.digest('hex');

console.log(result);  // Prints the hash value

// HMAC (Hash-based Message Authentication Code)

// Define a secret key
const secret = 'mySecretKey';

// Create an HMAC using SHA-256
const hmac = crypto.createHmac('sha256', secret);

// Update the HMAC with some data
hmac.update('hello world');

// Get the resulting HMAC as a hexadecimal string
const result1 = hmac.digest('hex');

console.log(result1);  // Prints the HMAC value


//Creating Secure Password Hashes

// Create a random salt
const salt = crypto.randomBytes(16).toString('hex');

// Password to hash
const password = 'mySecurePassword';

// Combine password and salt, then hash
const hash1 = crypto.createHmac('sha256', salt).update(password).digest('hex');

console.log('Salt:', salt);
console.log('Password Hash:', hash1);
