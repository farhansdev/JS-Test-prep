// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&"); // replaces all occurrencess with this logic in js

document.write("Before : " + message + "<br/>")
document.write("Replace and into '&' : " + newMessage)

let message = "Ali and Sami are best friends. They play cricket and football together."

let and = message.replace("and", "&")

alert(and)