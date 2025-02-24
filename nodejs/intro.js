// const fs = require('fs');
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);

const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


fs.writeFile('file.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});


fs.appendFile('file.txt', ' New content', 'utf8', (err) => {
    if (err) throw err;
    console.log('Content appended successfully');
});


fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully');
});


fs.access('file.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist');
    } else {
        console.log('File exists');
    }
});

fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files);
});

fs.mkdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory created successfully');
});

fs.rmdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory removed successfully');
});

fs.stat('file.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats.isFile()); // true if it's a file
    console.log(stats.isDirectory()); // true if it's a directory
});

fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully');
});

fs.watch('file.txt', (eventType, filename) => {
    console.log(`Event type is: ${eventType}`);
    if (filename) {
        console.log(`Filename provided: ${filename}`);
    } else {
        console.log('Filename not provided');
    }
});


fs.chmodSync('file.txt', 0o755); // Read, write, execute for owner; read and execute for others