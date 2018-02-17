/* To create animations or hide content jQuery 
is very very practical */
$(document).ready(function(){
      $("#vid").hide();
	    $("#tube").hide();
    $("#pictures_show").click(function(){
        $("#pic").show();
         $("#vid").hide();
          $("#tube").hide();
    });
    $("#video_show").click(function(){
        $("#vid").show();
        $("#pic").hide();
        $("#tube").hide();
    });
       $("#youtube_video_show").click(function(){
        $("#tube").show();
        $("#pic").hide();
        $("#vid").hide();
    });
});