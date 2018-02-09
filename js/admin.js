function logout (){
	/* When the function is activated by onclick event the name and password are deleted
	   from localStorage */
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    /*Login page redirection*/    
   window.location.assign("../JB_admin.html");
}

function check_admin(){
	/* if someone attempts to hit the page without authentication will be automatically redirected 
	e.g domainname/templates/admin_page*/
	 var user = {admin:"test", password:"test"};
     var admin=localStorage.getItem("username");
     var password=localStorage.getItem("password");
    if(user.admin==admin && user.password==password){  
	/* If the condition is true the admin will be welcome */
      document.getElementById("admin").innerHTML="Welcome: "+admin;

	/* If we are logged localStorage will update automatically */
	load_db("../files/news.js","obj");
	load_db("../files/pictures.js","pictures");
	load_db("../files/videos.js","videos");
	load_db("../files/events.js","events");	  
     
}else{
	/* else will be redirected to login page */
     window.location.assign("../JB_admin.html");
}

}
check_admin();

function load_db(location,lS_key) {
	/* 'location' - is path location of server storage files 
	and 'lS_key' - represent localStorage key
	    XMLHttpRequest is used to send and recive data from server
		To send data si used Post method and Get to recive data*/
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	/*readyState==4 means request finished and response is ready 
	 status == 200 means this is the standard response for successful HTTP requests*/
    if (this.readyState == 4 && this.status == 200) {
		/* Data is stored in local storage */
       localStorage.setItem(lS_key,JSON.parse(this.responseText));
     
    }
  };
  xhttp.open("GET", location, true);
  xhttp.send();
}
