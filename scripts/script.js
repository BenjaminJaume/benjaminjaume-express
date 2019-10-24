$(document).ready(function() {
  $('#navbar-placeholder').load('./navbar.html');
});

$(function() {
  $('[data-toggle="popover"]').popover();
});

$('[data-toggle=popover]').popover({
  html: true
});

// To implement later on with a server
// fetch('./downloads.txt')
//   .then(response => response.text())
//   .then(text => console.log(text));
// // outputs the content of the text file
