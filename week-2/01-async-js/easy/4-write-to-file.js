/*
    ## Write to a file
        Using the fs library again, try to write to the contents of a file.
        You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

function writeContent(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Write operation completed.');
    });
}

const data = 'Hey there from Anmol.';
writeContent('file.txt', data);

