/* Web page content */

function load_content(location,lS_key) {
	/* XMLHttpRequest is used to send and recive data from server
		To send data si used Post method and Get to recive data*/
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	  /*readyState==4 means request finished and response is ready 
		status == 200 means this is the standard response for successful HTTP requests*/
    if (this.readyState == 4 && this.status == 200) {
		/* Data is stored in local storage */
       localStorage.setItem("'"+lS_key+"'",JSON.parse(this.responseText));
     
    }
  };
  xhttp.open("GET", location, true);
  xhttp.send();
}
load_news("../files/news.js",obj);