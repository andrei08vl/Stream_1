
function script(){
    var admin = document.getElementById('admin');
    var password = document.getElementById('password');
	var msg="ussername or password are incorect";
    var user = {admin:"test", password:"test"};
    
 
if(admin.value==user.admin) {
    if(password.value==user.password){
		
		/*window.location.assign redirect to specific link*/
	 window.location.assign("templates/admin_news.html");
}
else{
	
   alert("ussername or password are incorect");
     
}
}
else{
    alert("ussername or password are incorect");
	
}
}

