/*
  __dirname: Provides the directory path of the current file.
  __filename: Provides the full file path of the current file, including the filename.

*/


// serve static files (e.g., HTML, CSS, JS)
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

/*
In ES Modules (using import/export syntax), __dirname is not available by default.
 However, you can replicate it using import.meta.url and the path module.
*/
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__dirname); // Output: Directory path of the current file