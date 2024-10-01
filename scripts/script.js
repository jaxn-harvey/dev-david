/* console.log("in console...");

$('#btnToggle').on('click', function() {
  console.log("event?:", "toggle clicked");

  //$('#gameArea').toggle(); 


  if ($('#gameArea').is(":visible")) {
    $('#gameArea').hide();

    }
    else if(!$('#gameArea').is(":visible")) {
     $('#gameArea').hide();

}
})*/


// $('body').css("background-color", "paleGreen");

// when btn is clicked
// IIFE = immediately 
$("#btnGetAvatar").on("click", function(){
  //get user name
  let bakerName = $("#bakerName").val();
  // var variableName = ... let (const)
  
  $("#greetingArea").text("Hi there, " + bakerName + " ");
  
  let randomAvatar = avatars[(Math.floor(Math.random() * avatars.length))];
  
  $("#animalArea").after("Your avatar is " + randomAvatar)
  
  //$("body").append("Hello, " + bakerName + " ");
  
} )

let avatars = ["🦅","🌵","🐟","🐛","👾","🦆"]

$("#imgDrag").draggable( 
  {
      stop: function() {
       // alert('dragged'); 
        
        if ( $("#imgDrag").position().left > $("#racetrack").position().left)
          {
            //they won
            $("#gameArea").append("Wow," + "<h2>YOU WON</h2> " + "Your position, " + $("#imgDrag").position().left + ", passed the required " + $("#racetrack").position().left + "<br><br>")
          }
        // alert( $("img").position().left ); 
        
 
      }
  }); 