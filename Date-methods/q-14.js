// 4. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var bill = document.getElementById("bill")

var cutomerName = prompt("Please enter your name");
var currentMonth = prompt("enter the current month");
var unitNumbers = prompt("enter the used unit numbers of current month");

const chargePerUnit = 16
const latePaySurcharge = 350

var netAmountPayble = unitNumbers * chargePerUnit
var grosAmountPayble = netAmountPayble + latePaySurcharge

bill.innerHTML = (`Customer Name : ${cutomerName} <br /> 
Current Month : ${currentMonth} <br />
Numbers of Units : ${unitNumbers} <br />
Charge per unit : ${chargePerUnit} <br />
Net Amount Payable (within Due Date) : ${netAmountPayble} <br />
Late Payment Surcharge : ${latePaySurcharge} <br/>
Gross Amount Payable (after Due Date) : ${grosAmountPayble}`)