// $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));
var labels = [];
var data = [];

$( document ).ready(function() {
    $(".button1").on("click", function(){
        if ($("#act1").val() !== "" && $("#act2").val() !== "" && $("#act3").val() !== "" && $("#act4").val() !== "" && $("#act5").val() !== "") {
            for (var i = 1; i < 6; i++) {
                var activity = $("#act" + i).val();
                labels.push(activity);
            }
            labels.push("Other");
            console.log(labels);
            $(".inputs").attr("class", "animated lightSpeedOut")
            $(".container").prepend($(".current-input").animate("bounceInRight"));
            // $(".current-input").attr("class", "animated bounceInRight");
        } else {
            console.log("empty");
        }
       
    });
    
   
});

$( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  } );


//create a function tha clears the form and replaces it with sliders using the new user input as the activities

// once the user inputs variables with the data of current activity save in local
//display that data in bottom left box
//move to next window to set goals
// once goals are set input data into box
//create donut chart for the variables for the current and goal time