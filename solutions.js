// Task 1

function countdown() {
    for (let i = 0; i < 11; i++) {
        console.log(i);
    }
}
countdown();

// Task 2 

var anArray = [];
var i = 0;
while (i < 11) {
    anArray.push(i);
    i++;
}
console.log(anArray);

// Task 3

const buttonToggle = document.querySelector(".toggleBtn");

buttonToggle.addEventListener("click", function () {
    window.alert("You pressed a button!")
});