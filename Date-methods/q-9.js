// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// Create a Date object for the starting date of Ramadan 2015
const ramadan2015 = new Date('2015-06-18T00:00:00');

// Get the current date
const currentDate = new Date();

// Calculate the time difference in milliseconds
const timeDifference = currentDate - ramadan2015
// Convert milliseconds to days
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the result
if (daysPassed > 0) {
    console.log(`Days passed since 1st Ramadan 2015: ${daysPassed} days`);
} else {
    console.log("Ramadan 2015 hasn't started yet!");
}