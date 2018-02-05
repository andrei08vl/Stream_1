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
     
}else{
	/* else will be redirected to login page */
     window.location.assign("../JB_admin.html");
}

}
check_admin();