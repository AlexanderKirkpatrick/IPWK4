$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();    
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if (input) {
      if (side1+side2 <= side3 || side2+side3 <= side1 || side1+side3 <= side2) {
        $("#csharp").show();
      } else if (side1===side2 && side1===side3 && side2 === side3) {
        $("#java").show();
      } else if (side1===side2 || side1===side3 || side2 === side3) {
        $("#python").show();
      } else {
        alert("Please enter a number and try again!")
      }
    }     
  });
});