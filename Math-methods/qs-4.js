// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

var value = document.getElementById("dice");

function dicevalue() {
  let dice = Math.random() * 6;
  let roundof = Math.round(dice)

  value.innerHTML = (`Randome dice value : ${roundof}`)
}