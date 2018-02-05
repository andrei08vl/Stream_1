function logout (){
	/* When the function is activated by onclick event the name and password are deleted
	   from localStorage */
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    /*Login page redirection*/    
   window.location.assign("../JB_admin.html");
}