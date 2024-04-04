/*
    ## File cleaner
    Read a file, remove all the extra spaces and write it back to the same file.

    For example, if the file input was
    ```
    hello     world    my    name   is       raman
    ```

    After the program runs, the output should be
    ```
    hello world my name is raman
    ```
*/

const fs = require('fs');

function cleanFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const cleanedData = data.split(' ').filter((word) => word !== '').join(' ');

        fs.writeFile(filename, cleanedData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('Write operation completed.');
        });
    });
}

cleanFile('file.txt');
