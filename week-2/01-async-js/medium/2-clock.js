/* 
    Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
    clock that shows you the current machine time?

    Can you make it so that it updates every second, and shows time in the following formats - 

    - HH:MM::SS (Eg. 13:45:23)
    - HH:MM::SS AM/PM (Eg 01:45:23 PM) 
*/

// Clock using 1-counter.md implementation
let hours1 = 0;
let minutes1 = 0;
let seconds1 = 0;

setInterval(() => {
    seconds1++;
    if (seconds1 === 60) {
        seconds1 = 0;
        minutes1++;
        if (minutes1 === 60) {
            minutes1 = 0;
            hours1++;
            if (hours1 === 24) {
                hours1 = 0;
            }
        }
    }
    console.log(formatTime(hours1, minutes1, seconds1));
}, 1000);

// Function to format time as HH:MM:SS or HH:MM:SS AM/PM
function formatTime(hours, minutes, seconds) {
    let formattedTime = '';

    formattedTime += (hours < 10 ? '0' + hours : hours) + ':';
    formattedTime += (minutes < 10 ? '0' + minutes : minutes) + ':';
    formattedTime += (seconds < 10 ? '0' + seconds : seconds);
    formattedTime += (hours < 12 ? ' AM' : ' PM');

    return formattedTime;
}
