/*
    ## Counter without setInterval
    - Without using setInterval, try to code a counter in Javascript.
*/

let counter = 0;

const count = () => {
    console.log(counter++);
    setTimeout(count, 1000);
}

count();