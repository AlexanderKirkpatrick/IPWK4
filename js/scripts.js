$(document).ready(function() {
  $("form#result").submit(function() {
    event.preventDefault();
    const language = parseInt($("input#number").val());
    let result;
    if (language >10) {
      $("#csharp").show();
    }
  });
});