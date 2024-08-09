// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coin = document.getElementById("coin");

function coinValue() {

    var value = Math.random() * 10
    var coinvalue = Math.round(value)

    if (coinvalue % 2 === 0 ) {
        coin.innerHTML = `${coinvalue} <br/> Random coin value : ${'Heads'}`;
    }else {
        coin.innerHTML = `${coinvalue} <br/> Random coin value : ${'Tails'}`;

    }
}