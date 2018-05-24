// $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));
var labels = [];
var data = [];
var otherTime = 168;
var goals = [];
var goalOther = 168;

$(document).ready(function () {
    $(".button1").on("click", function () {
        if ($("#act1").val() !== "" && $("#act2").val() !== "" && $("#act3").val() !== "" && $("#act4").val() !== "" && $("#act5").val() !== "") {
            for (var i = 1; i < 6; i++) {
                var activity = $("#act" + i).val();
                labels.push(activity);
            }
            labels.push("Other");
            console.log(labels);
            $(".inputs").attr("class", "animated hinge")
            $(".container").append($(".current-input").animate("bounceInRight"));
            // $(".current-input").attr("class", "animated bounceInRight");

            $("#Activity1").text(labels[0]);
            $("#Activity2").text(labels[1]);
            $("#Activity3").text(labels[2]);
            $("#Activity4").text(labels[3]);
            $("#Activity5").text(labels[4]);
        } else {
            console.log("empty");
        }

    });

    // $( function() {
    //     var handle = $( "#custom-handle" );
    //     $( "#slider" ).slider({
    //       create: function() {
    //         handle.text( $( this ).slider( "value" ) );
    //       },
    //       slide: function( event, ui ) {
    //         handle.text( ui.value );
    //       }
    //     });
    // });

    $(".button2").on("click", function () {
        for (var i = 1; i < 6; i++) {
            var hours = $("#slider" + i).val();
            otherTime -= hours;
            data.push(parseInt(hours));
        }
        data.push(otherTime);
        console.log(data);
        $(".current-input").attr("class", "animated hinge")
        $(".container").prepend($(".goal-input").animate("bounceInRight"));
        // $(".current-input").attr("class", "animated bounceInRight");

        // $("#Activity1").text(labels[0]);
        // $("#Activity2").text(labels[1]);
        // $("#Activity3").text(labels[2]);
        // $("#Activity4").text(labels[3]);
        // $("#Activity5").text(labels[4]);
    });

    $(".button3").on("click", function () {
        for (var i = 6; i < 11; i++) {
            var goalHours = $("#slider" + i).val();
            goalOther -= goalHours;
            goals.push(parseInt(goalHours));
        }
        goals.push(goalOther);
        console.log(goals);
        $(".goal-input").attr("class", "animated hinge")
        // $(".container").prepend($(".goal-input").animate("bounceInRight"));
        // $(".current-input").attr("class", "animated bounceInRight");
    });

});
 //**Find a way to distinguish bewtween the current and goal arrays */



//create a function tha clears the form and replaces it with sliders using the new user input as the activities

// once the user inputs variables with the data of current activity save in local
//display that data in bottom left box
//move to next window to set goals
// once goals are set input data into box
//create donut chart for the variables for the current and goal time