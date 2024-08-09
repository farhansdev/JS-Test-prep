// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

let lastDate = new Date('Fri May 10-2024 09:55:16')

let currentDate = new Date()

let convertMiliseconds = currentDate - lastDate

let hoursDifference = Math.floor(convertMiliseconds / (1000 * 60 * 60))

console.log(`current date : ${currentDate}`);
console.log(`1 hour ago, it was ${lastDate}`);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

let currentdate = new Date()

//Reset the year by subtracting 100 yrs back
currentdate.setFullYear(currentdate.getFullYear() - 100)

// Show the date in an alert box
console.log(`100 years back, it was ${currentdate}`);