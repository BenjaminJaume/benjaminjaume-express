// $(document).ready(function () {
// get current URL path and assign 'active' class
// var pathname = window.location.pathname;
// $('.navbar-nav > li > a[href="' + pathname + '"]')
//   .parent()
//   .addClass("active");
// });

// $(function() {
//   $('[data-toggle="popover"]').popover();
// });

// $("[data-toggle=popover]").popover({
//   html: true
// });

// To implement later on with a server
// fetch('./downloads.txt')
//   .then(response => response.text())
//   .then(text => console.log(text));
// // outputs the content of the text file

// var clickCounter = function () {
//   if (typeof Storage !== "undefined") {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount) + 1;
//     } else {
//       localStorage.clickcount = 1;
//     }
//     document.getElementById("result").innerHTML =
//       "You have clicked the button " + localStorage.clickcount + " time(s).";
//   } else {
//     document.getElementById("result").innerHTML =
//       "Sorry, your browser does not support web storage...";
//   }
// }