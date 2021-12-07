// get jQuery DOM ready
$(document).ready(function() {
  
  //console.log("character counter file is loaded!!!!!");

  // tweet input chracters counter
  $("#tweet-text").on("input", function(e) {
    const numOfChar = (140 - $(this).val().length);
    
    // handle css styling when chracter exceeds number of character
    if (numOfChar < 0) {
      $(".counter").addClass("exceed-count").html(numOfChar);
    } else {
      $(".counter").removeClass("exceed-count").html(numOfChar);
    }
    
    // dynamically change counter on html
    $(".counter").html(numOfChar);
  });
  
});