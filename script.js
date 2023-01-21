let dateDisplayEl = $("#date-display");
let colorBlock = $(".hour");

// Displays the current date using moment.js
function displayDate() {
  let rightNow = moment().format("dddd MMMM Do");
  dateDisplayEl.text(rightNow);
 
$(".saveBtn").on("click"), function () {
    let text = $(this).siblings(".description").val();
localStorage.setItem(text); // set items to local storage within the saveBtn class 
}}
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

displayDate();


// need to change color blocks for past/present/future events 
function colorChange() {
  let currentHour = moment().format("h A");
  for (let index = 0; index < colorBlock.length; index++) {
    const element = colorBlock[index];
    if (currentHour === element.id) {
    
    }
  }
}

