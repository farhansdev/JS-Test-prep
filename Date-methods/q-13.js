// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// Prompt the user for their age
const userAge = prompt("enter your age:");

// Get the current year
const currentYear = new Date().getFullYear()

// Calculate the birth year
const birthYear = currentYear - userAge;

// Show the birth year in an alert
alert("Your age is : " + birthYear)