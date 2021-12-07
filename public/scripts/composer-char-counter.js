$(document).ready(function() {
  
  console.log("character counter file is loaded!!!!!");

  $("#tweet-text").on("input", function(e) {
    const numOfChar = (140 - $(this).val().length);
    
    if (numOfChar < 0) {
      $(".counter").addClass("exceed-count").html(numOfChar);
    } else {
      $(".counter").removeClass("exceed-count").html(numOfChar);
    }
    $(".counter").html(numOfChar);
  });
  
});