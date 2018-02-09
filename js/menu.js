$(document).ready(function(){
	//the news pages is loaded first
    $("#pages").load("templates/news.html");
	//when the id is clicked page is loaded in #pages
    $("#news").click(function(){
        $("#pages").load("templates/news.html");
    });
	 $("#concert").click(function(){
        $("#pages").load("templates/events.html");
    });
     $("#media").click(function(){
        $("#pages").load("templates/media.html");
    });
	 $("#contact").click(function(){
        $("#pages").load("templates/contact.html");
    });
});