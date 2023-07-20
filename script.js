//GetElement for all the hours

let hour9 = document.getElementById("hour-9");
let hour10 = document.getElementById("hour-10");
let hour11 = document.getElementById("hour-11");
let hour12 = document.getElementById("hour-12");
let hour13 = document.getElementById("hour-13");
let hour14 = document.getElementById("hour-14");
let hour15 = document.getElementById("hour-15");
let hour16 = document.getElementById("hour-16");
let hour17 = document.getElementById("hour-17");

//GetElements for the Save Button

let hour9Btn = document.getElementById("hour9Btn");
let hour10Btn = document.getElementById("hour10Btn");
let hour11Btn = document.getElementById("hour11Btn");
let hour12Btn = document.getElementById("hour12Btn");
let hour13Btn = document.getElementById("hour13Btn");
let hour14Btn = document.getElementById("hour14Btn");
let hour15Btn = document.getElementById("hour15Btn");
let hour16Btn = document.getElementById("hour16Btn");
let hour17Btn = document.getElementById("hour17Btn");

//addEventListener Area

hour9Btn.addEventListener('click', hour9Save)
hour10Btn.addEventListener('click', hour10Save)
hour11Btn.addEventListener('click', hour11Save)
hour12Btn.addEventListener('click', hour12Save)
hour13Btn.addEventListener('click', hour13Save)
hour14Btn.addEventListener('click', hour14Save)
hour15Btn.addEventListener('click', hour15Save)
hour16Btn.addEventListener('click', hour16Save)
hour17Btn.addEventListener('click', hour17Save)

//LocalStorage Area

hour9Stored = localStorage.getItem("hour9LocalStorage");
hour9Btn.previousElementSibling.innerHTML = hour9Stored;

hour10Stored = localStorage.getItem("hour10LocalStorage");
hour10Btn.previousElementSibling.innerHTML = hour10Stored;

hour11Stored = localStorage.getItem("hour11LocalStorage");
hour11Btn.previousElementSibling.innerHTML = hour11Stored;

hour12Stored = localStorage.getItem("hour12LocalStorage");
hour12Btn.previousElementSibling.innerHTML = hour12Stored;

hour13Stored = localStorage.getItem("hour13LocalStorage");
hour13Btn.previousElementSibling.innerHTML = hour13Stored;

hour14Stored = localStorage.getItem("hour14LocalStorage");
hour14Btn.previousElementSibling.innerHTML = hour14Stored;

hour15Stored = localStorage.getItem("hour15LocalStorage");
hour15Btn.previousElementSibling.innerHTML = hour15Stored;

hour16Stored = localStorage.getItem("hour16LocalStorage");
hour16Btn.previousElementSibling.innerHTML = hour16Stored;

hour17Stored = localStorage.getItem("hour17LocalStorage");
hour17Btn.previousElementSibling.innerHTML = hour17Stored;

//Date using DayJs
let currentDay = document.getElementById('currentDay');
setInterval(function (){currentDay.innerHTML = dayjs().format('dddd[,] MMMM d')}, 1000);

let hours = dayjs().format('HH');
console.log(hours);
// timer()

// function timer(){
//   let hours = dayjs().format('HH');
//   let arrayHours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
//   let i = hour15;
//   console.log(i);
//   arrayHours.forEach((present) => {
//     if (present === i){
//       present.style.backgroundColor = "red"
//     } else if (present > i ) {
//       present.style.backgroundColor = "pink"
//     } else{
//       present.style.backgroundColor = "yellow"
//     }
//   });
// }


//Save Function Area
function hour9Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour9LocalStorage", text)
}
function hour10Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour10LocalStorage", text)
}
function hour11Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour11LocalStorage", text)
}
function hour12Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour12LocalStorage", text)
}
function hour13Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour13LocalStorage", text)
}
function hour14Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour14LocalStorage", text)
}
function hour15Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour15LocalStorage", text)
}
function hour16Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour16LocalStorage", text)
}
function hour17Save(){
  const text = this.previousElementSibling.value;
  console.log(text);
  localStorage.setItem("hour17LocalStorage", text)
}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let hours = dayjs().format('HH');
  $(".row").each(function(index){
  if($(this).data("hour") == hours){
    $(this).addClass("present");
  }else if($(this).data("hour") < hours){
    $(this).addClass("past");
  }else if($(this).data("hour") > hours){
    $(this).addClass("future");
  }
})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
