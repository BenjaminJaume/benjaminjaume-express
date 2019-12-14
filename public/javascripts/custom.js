// @ts-ignore
$('[data-toggle="popover"]').popover();

// $(function () {
//     $('[data-toggle="popover"]').popover();
// });

// $("[data-toggle=popover]").popover({
//     html: true
// });

var clickCounter = function() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = localStorage.clickcount;
  } else {
    // "Sorry, your browser does not support web storage...";
  }
};
