// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

var newDate = new Date()
var currentDate = newDate.getDate()
   alert(`current Date is : ${currentDate}`);

   if(currentDate < 16) {
    alert("First fifteen days of the month");
   }else {
    alert("Second fifteen days of the month");
   }