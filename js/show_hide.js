/* To create animations or hide content jQuery 
is very very practical */
$(document).ready(function(){
      $("#vid").hide();
    $("#pictures_show").click(function(){
        $("#pic").show();
         $("#vid").hide();
    });
    $("#video_show").click(function(){
        $("#vid").show();
        $("#pic").hide();
    });
});