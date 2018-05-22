// $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));
var labels = [];
var data = [];

$( document ).ready(function() {
    $(".button1").on("click", function(){
        if ($("#act1").val() !== "" && $("#act2").val() !== "" && $("#act3").val() !== "" && $("#act4").val() !== "" && $("#act5").val() !== "") {
            for (var i = 1; i < 6; i++) {
                var activity = $("#act" + i).val();
                data.push(activity);
            }
            data.push("Other");
            console.log(data);
        } else {
            console.log("empty");
        }
    });
});