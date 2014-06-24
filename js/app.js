//Prevent spoilerss
//Hide SPoilers and reveal them through user interaction.

//1. hide spoiler
$(".spoiler span").hide();
//2. add a button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//3. when button pressed
$("button").click(function(){
  //we wan't to show spoiler
  $(".spoiler span").show();
  // get rid of button
  $(this).remove();
});