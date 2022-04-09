$(document).ready(function() {
  $("form#result").submit(function() {
    const number = parseInt($("input#number").val());
    const control = 10;

    if (number >= control) {
      $("#csharp").show();
    } else if (number <= control) {
      $("#java").show();
    }

    event.preventDefault();
  });
});