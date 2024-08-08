console.log("Script running...");
// Task 1: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
let csh = document.querySelector("#csh")
console.log(csh)
// Select the body and console log to confirm you selected successfully
let high = document.body
console.log("high")

// Add an event listener such that when you click the CSH mode button, the background color of body becomes green

csh.addEventListener("click", function(event) {
  high.style.backgroundColor = "green"
})



// Task 2: All off button
// Select the all off button and console log to confirm you selected successfully
let button = document.querySelector("#clear")
console.log("successfully")
// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let lightbulb = document.querySelectorAll(".lightbulb")
console.log("successfully")
// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black
button.addEventListener("click", function(event) {
  for (let i = 0; i < lightbulb.length; i++) {
    lightbulb[i].style.backgroundColor = "black"
  }
})



// Task 3: On and off feature
// Add an event listener to the FIRST lightbulb such that when you click it, the background color of that p tag changes to white

  lightbulb[0].addEventListener("click",function(event){
    lightbulb[0].style.backgroundColor = "white"
  
})




// Extra credit: try to use a for loop to make every lightbulb's background color to change when you click it






