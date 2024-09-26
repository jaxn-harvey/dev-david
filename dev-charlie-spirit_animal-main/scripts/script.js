console.log("in console...");

$('#btnToggle').on('click', function() {
  console.log("event?:", "toggle clicked");

  $('#gameArea').toggle(); 


  //if ($('#gameArea').is(":visible")) {
   // $('#gameArea').hide();

    //}
    //else if(!$('#gameArea').is(":visible")) {
     // $('#gameArea').hide();

//}
})

$('#divGameSection').draggable(); 

$('#imgDrag').draggable(); 

// $('body').css("background-color", "paleGreen");

// when btn is clicked
// IIFE = immediately 
$("#btnGetAnimal").on("click", function(){
  //get user name
  let bakerName = $("#bakerName").val();
  // var variableName = ... let (const)
  
  $("#greetingArea").text("Hi there, " + bakerName + " ");
  
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];
  
  $("#animalArea").after("Your spirit animal is " + randomAnimal)
  
  //$("body").append("Hello, " + bakerName + " ");
  
} )

let spiritAnimals = ["🦅","🌵","🐟","🐛","👾","🦆","file not found"]
//