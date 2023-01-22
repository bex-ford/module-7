$(document).ready(function () {
  let dateDisplayEl = $("#date-display");
  let colorBlock = $(".time-block");

  // displays the current date using moment.js
  function displayDate() {
    let rightNow = moment().format("dddd MMMM Do");
    dateDisplayEl.text(rightNow);

    $(".saveBtn").on("click", function () {
      console.log(this);
      let text = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      console.log(text, time);
      localStorage.setItem(time, text); // set items to local storage within the saveBtn class
    });
  }
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

  function colorChange() {
    let currentHour = moment().format("h A"); // current hour using moment.js
    console.log(Number.parseInt(currentHour));
    for (let index = 0; index < colorBlock.length; index++) {
      const element = colorBlock[index];
      if (Number.parseInt(currentHour) === Number.parseInt(element.id)) {
        console.log(currentHour, element);
        colorBlock.addClass("present");
        colorBlock.removeClass("past");
        colorBlock.removeClass("future");
      } else if (currentHour > Number.parseInt(element.id)) {
        console.log(currentHour, element, "line 42");
        colorBlock.addClass("future");
        colorBlock.removeClass("past");
        colorBlock.removeClass("present");
      } else {
        colorBlock.addClass("past");
        colorBlock.removeClass("present");
        colorBlock.removeClass("future");
      }
    }
  }
  colorChange();
});
