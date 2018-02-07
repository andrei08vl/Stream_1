function post_news(){
    
      var news=JSON.parse(localStorage.getItem('obj'));
      
        var n;
        var txt=" ";
        for(n in news){
        txt += "<div><h1>"+news[n].title+"</h1><br/>";
        txt += "<p>"+news[n].date+"</p><br>";
        txt += "<p>"+news[n].message+"</p></div>";
    }
      document.getElementById("nws").innerHTML =txt;
    
}
post_news();

function load_news() {
	/* XMLHttpRequest is used to send and recive data from server
		To send data si used Post method and Get to recive data*/
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	  /*readyState==4 means request finished and response is ready 
		status == 200 means this is the standard response for successful HTTP requests*/
    if (this.readyState == 4 && this.status == 200) {
		/* Data is stored in local storage */
       localStorage.setItem('obj',JSON.parse(this.responseText));
     
    }
  };
  xhttp.open("GET", "../file/news.js", true);
  xhttp.send();
}
load_news();