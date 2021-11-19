$(document).ready(function() {
  
  console.log("character counter file is loaded!!!!!");

  /*$("#tweet-text").keyup(function(e) {
    console.log("You have typed "+$(this).val());
  });*/
 $("#tweet-text").on("input", function(e){
    const numOfChar = (140 - $(this).val().length);
    
    if (numOfChar < 0) {
      $(".counter").addClass("exceed-count").html(numOfChar);
    } else {
      $(".counter").removeClass("exceed-count").html(numOfChar);
    }

  });

  //#tweet-text - Selector
  //.keyup - Event
  //function(e) - Callback
  //this - represents current object - selector - Tweet-Text
  
});