
function script(){
    var admin = document.getElementById('admin');
    var password = document.getElementById('password');
	var msg="ussername or password are incorect";
    var user = {admin:"test", password:"test"};
    
 
if(admin.value==user.admin) {
    if(password.value==user.password){
	/* If the condition is true the data will be stored in html5 localStorage */	
	localStorage.setItem("username",user.admin);
	localStorage.setItem("password",user.password);
	
}
else{
	
   alert("ussername or password are incorect");
     
}
}
else{
    alert("ussername or password are incorect");
	
}
}

function logged(){
	
     var user = {admin:"test", password:"test"};
	 /* To get data from localStorage is used localStorage.getItem */
     var admin=localStorage.getItem("username");
     var password=localStorage.getItem("password");
	 
    if(user.admin==admin && user.password==password){
		
       	/*window.location.assign redirect to specific link*/
	 window.location.assign("templates/admin_news.html");
      
    }
    
}

logged();

